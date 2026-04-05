(() => {
	const FULL_NAME = "Aneudy Adames";
	const MS_PER_CHAR = 52;
	const START_DELAY_MS = 220;

	const jokes = [
		{
		  "joke": "I tried to tell a dad joke to a function.",
		  "answer": "But it didn’t get the reference."
		},
		{
		  "joke": "My team had a debate on what the best looping variable name is.",
		  "answer": "i won."
		},
		{
		  "joke": "Never ask a SQL dev to help you move furniture.",
		  "answer": "They drop tables."
		},
		{
		  "joke": "If you’re paid to code, you’re a programmer. But if it’s a hobby…",
		  "answer": "Are you just a grammer?"
		},
		{
		  "joke": "A GET request was reluctant to go the party.",
		  "answer": "They had no body to go with."
		},
		{
		  "joke": "I got really angry and smashed my keyboard.",
		  "answer": "I completely lost CTRL."
		},
		{
		  "joke": "We missed a really great opportunity to call containerization programs...",
		  "answer": "Tupper-ware."
		},
		{
		  "joke": "If you write Python, you know the road to hell is paved with...",
		  "answer": "Good indentations."
		},
		{
		  "joke": "The local train station is converting their site from Ruby on Rails to a different web framework.",
		  "answer": "I guess you could say it’s being de-Railed."
		},
		{
		  "joke": "Say what you want about SQL,",
		  "answer": "But it brings a lot to the table."
		},
		{
		  "joke": "I don’t trust Matlab developers.",
		  "answer": "They’re always plotting something."
		},
		{
		  "joke": "Yesterday, I met someone from Australia who works in IT.",
		  "answer": "I said, 'Do you come from a LAN down under?'"
		},
		{
		  "joke": "I was bragging that I knew the hex code for every color, but then I forgot the one for blue.",
		  "answer": "Yeah, that was a big 0000FF."
		},
		{
		  "joke": "A new database query walks into a bar.",
		  "answer": "The server says, 'Sorry, cache only.'"
		},
		{
		  "joke": "Programmers aren’t good endurance athletes.",
		  "answer": "They work in sprints."
		},
		{
		  "joke": "Developing a web browser takes time.",
		  "answer": "Chrome wasn’t built in a day, you know."
		},
		{
		  "joke": "I wanted to learn more about machine code so I took a Binary 101 class.",
		  "answer": "It wasn’t useful because it turned out to be the fifth class in a series."
		},
		{
		  "joke": "I walked down a street where the houses were numbered 64K, 128K, 256K, 512K and 1MB.",
		  "answer": "It was a nice trip down memory lane."
		},
		{
		  "joke": "I once knew an excellent programmer that believed they wrote bad spaghetti code.",
		  "answer": "They had Impasta Syndrome."
		},
		{
		  "joke": "Building a website is like baking brownies.",
		  "answer": "They’re best when they’re pretty GUI."
		}
	  ]

	const y = document.getElementById("y");
	if (y) y.textContent = String(new Date().getFullYear());

	(() => {
		const typewriter = document.getElementById("typewriter");
		if (!typewriter) return;
		const reduced =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduced) {
			typewriter.textContent = FULL_NAME;
			return;
		}
		typewriter.textContent = "";
		let i = 0;
		const tick = () => {
			if (i < FULL_NAME.length) {
				typewriter.textContent += FULL_NAME.charAt(i);
				i += 1;
				window.setTimeout(tick, MS_PER_CHAR);
			}
		};
		window.setTimeout(tick, START_DELAY_MS);
	})();

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		const href = anchor.getAttribute("href");
		if (!href || href === "#") return;
		const target = document.querySelector(href);
		if (!target) return;
		anchor.addEventListener("click", (e) => {
			e.preventDefault();
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			history.pushState(null, "", href);
		});
	});

	const output = document.getElementById("terminal-output");
	const form = document.getElementById("terminal-form");
	const input = document.getElementById("terminal-input");
	if (!output || !form || !input) return;

	const COMMANDS = [
		"/about",
		"/clear",
		"/contact",
		"/experience",
		"/hack",
		"/help",
		"/interest",
		"/interests",
		"/joke",
		"/jokes",
		"/job",
		"/languages",
		"/legacy",
		"/location",
		"/resume",
		"/v1",
		"/work",
	].sort();

	function longestCommonPrefix(strs) {
		if (!strs.length) return "";
		let a = strs[0];
		for (let i = 1; i < strs.length; i++) {
			const b = strs[i];
			let j = 0;
			while (j < a.length && j < b.length && a[j] === b[j]) j += 1;
			a = a.slice(0, j);
		}
		return a;
	}

	function getMatches(prefix) {
		const p = prefix.toLowerCase();
		return COMMANDS.filter((c) => c.startsWith(p));
	}

	function parseFirstToken(value) {
		const trimmedStart = value.trimStart();
		const lead = value.slice(0, value.length - trimmedStart.length);
		const spaceIdx = trimmedStart.indexOf(" ");
		const first =
			spaceIdx === -1 ? trimmedStart : trimmedStart.slice(0, spaceIdx);
		const rest =
			spaceIdx === -1 ? "" : trimmedStart.slice(spaceIdx + 1).trimEnd();
		return { lead, first, rest };
	}

	function applyTabCompletion() {
		const { lead, first, rest } = parseFirstToken(input.value);
		if (!first.startsWith("/")) return false;

		const matches = getMatches(first);
		if (matches.length === 0) return false;

		let next;
		if (matches.length === 1) {
			next = matches[0];
		} else {
			const lcp = longestCommonPrefix(matches);
			next = first.length < lcp.length ? lcp : matches[0];
		}

		const nextVal = `${lead}${next}${rest ? ` ${rest}` : ""}`;
		if (nextVal === input.value) return false;

		input.value = nextVal;
		const end = input.value.length;
		input.setSelectionRange(end, end);
		return true;
	}

	const RESUME_FILENAME = "01. Aneudy Adames Resumee.pdf";
	const RESUME_PATH = `/${encodeURIComponent(RESUME_FILENAME)}`;

	const RESUME_FALLBACK_HTML = `<div class="terminal-block"><span class="t-line"><span class="t-muted">No résumé PDF is available at this URL yet.</span></span><span class="t-line t-indent"><span class="t-str">"email"</span>: <a class="t-link" href="mailto:a4aneudy@gmail.com?subject=R%C3%A9sum%C3%A9%20request">a4aneudy@gmail.com</a></span><span class="t-line t-indent"><span class="t-str">"LinkedIn"</span>: <a class="t-link" href="https://www.linkedin.com/in/aneudy-adames-600441158/" rel="noopener noreferrer" target="_blank">profile</a></span></div>`;

	const LOC = `<span class="t-line"><span class="t-prompt">&gt; aneudy.location</span></span><span class="t-line t-indent"><span class="t-str">"New York, United States"</span></span>`;

	const CON = `<span class="t-line"><span class="t-prompt">&gt; aneudy.contact</span></span><span class="t-line t-indent"><span class="t-bracket">[</span><a class="t-link" href="mailto:a4aneudy@gmail.com">"a4aneudy@gmail.com"</a><span class="t-muted">, </span><a class="t-link" href="https://www.linkedin.com/in/aneudy-adames-600441158/" rel="noopener noreferrer" target="_blank">"LinkedIn"</a><span class="t-muted">, </span><a class="t-link" href="https://github.com/aneudya4" rel="noopener noreferrer" target="_blank">"github"</a><span class="t-bracket">]</span></span>`;

	const block = (inner) => `<div class="terminal-block">${inner}</div>`;

	const DEFAULT_HTML =
		block(LOC + CON) +
		`<span class="t-line t-line--hint"><span class="t-muted">Type </span><span class="t-str">/help</span><span class="t-muted"> for more commands.</span></span><span class="t-line t-line--hint"><span class="t-muted">Press </span><span class="t-str">Tab</span><span class="t-muted"> to complete a command from a prefix.</span></span>`;
	const LOCATION_HTML = block(LOC);
	const CONTACT_HTML = block(CON);

	const INTERESTS_HTML = block(
		`<span class="t-line"><span class="t-prompt">&gt; aneudy.interests</span></span><span class="t-line t-indent"><span class="t-bracket">[</span><span class="t-str">"MLB"</span><span class="t-muted">, </span><span class="t-str">"Gaming"</span><span class="t-muted">, </span><span class="t-str">"NYC coffee &amp; a good diner breakfast"</span><span class="t-bracket">]</span></span>`
	);

	const LANGUAGES_HTML = block(
		`<span class="t-line"><span class="t-prompt">&gt; aneudy.languages</span></span><span class="t-line t-indent"><span class="t-bracket">[</span><span class="t-str">"JavaScript"</span><span class="t-muted">, </span><span class="t-str">"TypeScript"</span><span class="t-muted">, </span><span class="t-str">"Vue"</span><span class="t-muted">, </span><span class="t-str">"React"</span><span class="t-muted">, </span><span class="t-str">"PHP"</span><span class="t-muted">, </span><span class="t-str">"Node"</span><span class="t-muted">, </span><span class="t-str">"PostgreSQL"</span><span class="t-bracket">]</span></span>`
	);

	const EXPERIENCE_HTML = block(
		`<span class="t-line"><span class="t-prompt">&gt; aneudy.experience</span></span><span class="t-line t-indent"><span class="t-str">"BlueOps LLC, Full Stack Web Developer II &amp; Partner Integration Lead"</span></span><span class="t-line t-indent"><span class="t-muted">// NotaryLive &amp; StateVitalRecords: Laravel, Vue, Svelte.</span></span><span class="t-line t-indent"><span class="t-muted">// Lead partner integrations.</span></span><span class="t-line t-indent"><span class="t-muted">// Guided junior developers, offering mentorship and support to foster team growth and development, and conducted code reviews to ensure adherence to coding standards and best practices.</span></span><span class="t-line t-indent"><span class="t-str">"The Ksquare Group, Front-End/Salesforce Developer (Remote) · Dec 2020 to Nov 2021"</span></span><span class="t-line t-indent"><span class="t-muted">// Interactive UI with HTML, CSS &amp; JavaScript; responsive email templates; multiple projects end-to-end (design through delivery).</span></span><span class="t-line t-indent"><span class="t-muted">// Web service integration (REST/SOAP); presentations to stakeholders including the CEO.</span></span>`
	);

	const V1_HTML = block(
		`<span class="t-line"><span class="t-prompt">&gt; aneudy.legacy</span></span><span class="t-line t-indent"><span class="t-str">"Version 1 portfolio"</span></span><span class="t-line t-indent"><a class="t-link" href="/v1/" rel="noopener noreferrer">Open /v1/</a></span>`
	);

	const HELP_HTML = block(
		`<span class="t-line"><span class="t-str">Available commands</span></span><span class="t-line t-indent"><span class="t-muted">Tab: Complete a command (prefix match)</span></span><span class="t-line t-indent"><span class="t-muted">/resume: Download résumé PDF</span></span><span class="t-line t-indent"><span class="t-muted">/location: Show location</span></span><span class="t-line t-indent"><span class="t-muted">/contact: Show contact links</span></span><span class="t-line t-indent"><span class="t-muted">/experience · /work · /job: Work history</span></span><span class="t-line t-indent"><span class="t-muted">/interests · /interest · /languages</span></span><span class="t-line t-indent"><span class="t-muted">/joke · /jokes: Random developer joke</span></span><span class="t-line t-indent"><span class="t-muted">/hack: Matrix-style “mainframe” (toy)</span></span><span class="t-line t-indent"><span class="t-muted">/about: Jump to About section</span></span><span class="t-line t-indent"><span class="t-muted">/v1 · /legacy: Link to the previous site (v1)</span></span><span class="t-line t-indent"><span class="t-muted">/clear: Reset terminal to default view</span></span>`
	);

	function escapeHtml(s) {
		return String(s)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;");
	}

	function triggerResumeDownload(url) {
		const a = document.createElement("a");
		a.href = url;
		a.download = RESUME_FILENAME;
		a.rel = "noopener noreferrer";
		a.style.display = "none";
		document.body.appendChild(a);
		a.click();
		a.remove();
	}

	function randomJokeHtml() {
		if (!jokes.length) {
			return block(
				`<span class="t-line"><span class="t-muted">No jokes loaded.</span></span>`,
			);
		}
		const j = jokes[Math.floor(Math.random() * jokes.length)];
		const setup = escapeHtml(j.joke);
		const punch = escapeHtml(j.answer);
		return block(
			`<span class="t-line"><span class="t-prompt">&gt; aneudy.joke</span></span><span class="t-line t-indent"><span class="t-str">"${setup}"</span></span><span class="t-line t-indent"><span class="t-muted">: </span><span class="t-str">"${punch}"</span></span>`,
		);
	}

	function scrollOutput() {
		output.scrollTop = output.scrollHeight;
	}

	function appendEcho(raw) {
		const line = document.createElement("div");
		line.className = "t-line t-line--echo";
		line.innerHTML = `<span class="t-prompt">&gt; ${escapeHtml(raw)}</span>`;
		output.appendChild(line);
	}

	function appendHtml(html) {
		const wrap = document.createElement("div");
		wrap.className = "terminal-out";
		wrap.innerHTML = html;
		output.appendChild(wrap);
	}

	function appendMuted(text) {
		const line = document.createElement("div");
		line.className = "t-line";
		line.innerHTML = `<span class="t-muted">${escapeHtml(text)}</span>`;
		output.appendChild(line);
	}

	function renderDefault() {
		appendHtml(DEFAULT_HTML);
	}

	function clearAndDefault() {
		output.innerHTML = "";
		renderDefault();
		scrollOutput();
	}

	const HACK_MATRIX_CHARS =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>;/_*0xアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

	const HACK_BANNER_STAGES = [
		"breaking into the mainframe",
		"I'm bypassing the firewall",
		"they're behind a 128-bit RSA encryption... I'll need more time",
	];

	/** Time between banner / log stage updates (ms). */
	const HACK_STAGE_GAP_MS = 2400;
	/** Matrix overlay runs for all stages then ends. */
	const HACK_MATRIX_DURATION_MS =
		HACK_STAGE_GAP_MS * HACK_BANNER_STAGES.length;

	function runHackMatrix() {
		const terminalBody = form.closest(".terminal__body");
		if (!terminalBody) return;

		const finish = () => {
			appendHtml(
				block(
					`<span class="t-line"><span class="terminal-matrix-we-in">we are in</span></span>`,
				),
			);
			scrollOutput();
			input.focus();
		};

		function logStage(i) {
			appendMuted(HACK_BANNER_STAGES[i]);
			scrollOutput();
		}

		logStage(0);

		if (
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			window.setTimeout(() => {
				logStage(1);
			}, HACK_STAGE_GAP_MS);
			window.setTimeout(() => {
				logStage(2);
			}, HACK_STAGE_GAP_MS * 2);
			window.setTimeout(finish, HACK_STAGE_GAP_MS * 3);
			return;
		}

		input.disabled = true;
		input.setAttribute("aria-busy", "true");

		const overlay = document.createElement("div");
		overlay.className = "terminal-matrix-overlay";
		overlay.setAttribute("aria-hidden", "true");

		const canvas = document.createElement("canvas");
		canvas.className = "terminal-matrix-overlay__canvas";
		canvas.setAttribute("role", "presentation");

		const banner = document.createElement("div");
		banner.className = "terminal-matrix-overlay__banner";
		banner.textContent = HACK_BANNER_STAGES[0];

		overlay.appendChild(canvas);
		overlay.appendChild(banner);
		terminalBody.appendChild(overlay);

		const ctx = canvas.getContext("2d");
		if (!ctx) {
			overlay.remove();
			input.disabled = false;
			input.removeAttribute("aria-busy");
			finish();
			return;
		}

		const stageTimers = [];

		stageTimers.push(
			window.setTimeout(() => {
				banner.textContent = HACK_BANNER_STAGES[1];
				logStage(1);
			}, HACK_STAGE_GAP_MS),
		);

		stageTimers.push(
			window.setTimeout(() => {
				banner.textContent = HACK_BANNER_STAGES[2];
				logStage(2);
			}, HACK_STAGE_GAP_MS * 2),
		);

		const fontSize = 13;
		let drops = [];
		let animationId = 0;

		function resize() {
			const w = overlay.clientWidth;
			const h = overlay.clientHeight;
			if (w < 1 || h < 1) return;
			canvas.width = w;
			canvas.height = h;
			const colCount = Math.floor(w / fontSize);
			drops = [];
			for (let i = 0; i < colCount; i++) {
				drops[i] = Math.random() * h;
			}
		}

		function drawFrame() {
			const w = canvas.width;
			const h = canvas.height;
			if (!w || !h) {
				animationId = requestAnimationFrame(drawFrame);
				return;
			}
			ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
			ctx.fillRect(0, 0, w, h);
			ctx.font = `${fontSize}px ui-monospace, monospace`;
			for (let i = 0; i < drops.length; i++) {
				const ch =
					HACK_MATRIX_CHARS[
						Math.floor(Math.random() * HACK_MATRIX_CHARS.length)
					];
				const x = i * fontSize;
				const y = drops[i];
				ctx.fillStyle = `rgba(57, 255, 20, ${0.35 + Math.random() * 0.65})`;
				ctx.fillText(ch, x, y);
				drops[i] += fontSize;
				if (drops[i] > h && Math.random() > 0.975) {
					drops[i] = 0;
				}
			}
			animationId = requestAnimationFrame(drawFrame);
		}

		function onResize() {
			resize();
		}

		resize();
		window.addEventListener("resize", onResize);
		drawFrame();

		window.setTimeout(() => {
			stageTimers.forEach((id) => window.clearTimeout(id));
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", onResize);
			overlay.remove();
			input.disabled = false;
			input.removeAttribute("aria-busy");
			finish();
		}, HACK_MATRIX_DURATION_MS);
	}

	function handleCommand(raw) {
		const parts = raw.trim().split(/\s+/);
		const cmd = parts[0].toLowerCase();

		if (!cmd.startsWith("/")) {
			appendMuted("Commands start with /. Type /help for a list.");
			return;
		}

		switch (cmd) {
			case "/help":
				appendHtml(HELP_HTML);
				break;
			case "/resume": {
				const resumeUrl = new URL(RESUME_PATH, window.location.href).href;
				fetch(resumeUrl, { method: "HEAD", cache: "no-store" })
					.then((res) => {
						const ct = (res.headers.get("content-type") || "").toLowerCase();
						const looksPdf =
							res.ok &&
							(ct.includes("application/pdf") ||
								ct.includes("application/x-pdf") ||
								(ct.includes("application/octet-stream") &&
									RESUME_FILENAME.toLowerCase().endsWith(".pdf")));
						if (looksPdf) {
							triggerResumeDownload(resumeUrl);
							appendMuted("Downloading résumé…");
						} else {
							appendHtml(RESUME_FALLBACK_HTML);
						}
					})
					.catch(() => {
						appendHtml(RESUME_FALLBACK_HTML);
					});
				break;
			}
			case "/location":
				appendHtml(LOCATION_HTML);
				break;
			case "/contact":
				appendHtml(CONTACT_HTML);
				break;
			case "/interest":
			case "/interests":
				appendHtml(INTERESTS_HTML);
				break;
			case "/joke":
			case "/jokes":
				appendHtml(randomJokeHtml());
				break;
			case "/hack":
				runHackMatrix();
				break;
			case "/languages":
				appendHtml(LANGUAGES_HTML);
				break;
			case "/experience":
			case "/work":
			case "/job":
				appendHtml(EXPERIENCE_HTML);
				break;
			case "/about": {
				const el = document.getElementById("about");
				if (el) {
					el.scrollIntoView({ behavior: "smooth", block: "start" });
					appendMuted("Scrolling to About…");
				}
				break;
			}
			case "/v1":
			case "/legacy":
				appendHtml(V1_HTML);
				break;
			case "/clear":
				clearAndDefault();
				return;
			default:
				appendMuted(`Unknown command: ${escapeHtml(cmd)}. Type /help.`);
		}
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const raw = input.value;
		const trimmed = raw.trim();
		if (!trimmed) return;
		appendEcho(trimmed);
		input.value = "";
		handleCommand(trimmed);
		scrollOutput();
		input.focus();
	});

	input.addEventListener("keydown", (e) => {
		if (e.key !== "Tab" || e.shiftKey) return;
		if (!applyTabCompletion()) return;
		e.preventDefault();
	});

	output.addEventListener("click", () => input.focus());

	renderDefault();
	scrollOutput();
	input.focus();
})();
