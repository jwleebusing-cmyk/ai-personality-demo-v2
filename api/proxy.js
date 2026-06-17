export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY;
  if (!DEEPSEEK_KEY) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { standardMessages, designedMessages } = await req.json();

    const [standardRes, designedRes] = await Promise.all([
      fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: standardMessages,
          temperature: 0.7,
          max_tokens: 600,
        }),
      }),
      fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: designedMessages,
          temperature: 0.7,
          max_tokens: 600,
        }),
      }),
    ]);

    const [standardData, designedData] = await Promise.all([
      standardRes.json(),
      designedRes.json(),
    ]);

    if (!standardRes.ok || !designedRes.ok) {
      const errMsg = !standardRes.ok
        ? (standardData.error?.message || 'Unknown error')
        : (designedData.error?.message || 'Unknown error');
      return new Response(JSON.stringify({ error: errMsg }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const standardText = standardData.choices?.[0]?.message?.content || '';
    const designedRaw = designedData.choices?.[0]?.message?.content || '';

    const { judgment, response } = parseDesignedResponse(designedRaw);

    return new Response(JSON.stringify({
      standard: standardText,
      designed: {
        judgment,
        response,
      },
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function parseDesignedResponse(raw) {
  const intentMatch = raw.match(/【意图[:：]\s*(.+?)】/);
  const strategyMatch = raw.match(/【策略[:：]\s*(.+?)】/);
  const responseMatch = raw.match(/【回应[:：]\s*([\s\S]+?)$/);

  const judgment = {
    intent: intentMatch?.[1]?.trim() || '未判断',
    strategy: strategyMatch?.[1]?.trim() || '未说明',
  };

  let response = raw;
  if (responseMatch) {
    response = responseMatch[1].trim();
  } else {
    response = raw
      .replace(/【意图[:：]\s*.+?】/g, '')
      .replace(/【策略[:：]\s*.+?】/g, '')
      .replace(/【回应[:：】/g, '')
      .trim();
  }

  return { judgment, response };
}
