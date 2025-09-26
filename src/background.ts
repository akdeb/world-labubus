chrome.runtime.onMessage.addListener((msg, _sender, send) => {
	if (msg?.type === "GET_PROFILE") {
	  chrome.identity.getProfileUserInfo((info) => send({ ok: true, info }))
	  return true; // keep channel open for async response
	}
  });
  