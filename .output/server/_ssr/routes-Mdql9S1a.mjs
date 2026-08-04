import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as ArrowRight, S as ArrowUpRight, _ as Check, a as Menu, b as Binary, c as Layers, d as Github, f as Gamepad2, g as CodeXml, h as Copy, i as Rocket, l as Grid3x3, m as Database, n as Sparkles, o as Mail, p as Download, r as Send, s as Linkedin, t as X, u as GraduationCap, v as ChartLine, x as ArrowUp, y as BrainCircuit } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Mdql9S1a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Animated neural-network particle field rendered on canvas. */
function ParticleField() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let w = 0;
		let h = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const nodes = Array.from({ length: 60 }, () => ({
			x: Math.random(),
			y: Math.random(),
			vx: (Math.random() - .5) * 6e-4,
			vy: (Math.random() - .5) * 6e-4,
			r: Math.random() * 1.6 + .6
		}));
		const resize = () => {
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		window.addEventListener("resize", resize);
		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < 0 || n.x > 1) n.vx *= -1;
				if (n.y < 0 || n.y > 1) n.vy *= -1;
			}
			for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
				const a = nodes[i];
				const b = nodes[j];
				const dx = (a.x - b.x) * w;
				const dy = (a.y - b.y) * h;
				const d = Math.hypot(dx, dy);
				if (d < 140) {
					ctx.strokeStyle = `rgba(120,160,255,${(1 - d / 140) * .18})`;
					ctx.lineWidth = .6;
					ctx.beginPath();
					ctx.moveTo(a.x * w, a.y * h);
					ctx.lineTo(b.x * w, b.y * h);
					ctx.stroke();
				}
			}
			for (const n of nodes) {
				ctx.fillStyle = "rgba(160,140,255,0.55)";
				ctx.beginPath();
				ctx.arc(n.x * w, n.y * h, n.r, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 h-full w-full opacity-70"
	});
}
/** Soft glowing orbs + grid used as the page-wide ambient background. */
function AmbientBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines absolute inset-0 opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[150px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-neon/10 blur-[130px]" })
		]
	});
}
/** Cursor-following glow (desktop only). */
function CursorGlow() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const move = (e) => {
			el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-0 top-0 -z-10 hidden h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] md:block"
	});
}
var LINKS = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		mass: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "bg-gradient-brand fixed inset-x-0 top-0 z-50 h-[3px] origin-left",
		"aria-hidden": "true"
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll);
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		LINKS.forEach((l) => {
			const el = document.getElementById(l.id);
			if (el) observer.observe(el);
		});
		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-40 px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${scrolled ? "glass glow-ring" : "border border-transparent"}`,
			"aria-label": "Main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "font-display text-lg font-semibold tracking-tight",
					children: ["Pushpank", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${l.id}`,
						className: `relative rounded-full px-4 py-2 text-sm transition-colors ${active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
						children: [active === l.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-pill",
							className: "absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30",
							transition: {
								type: "spring",
								stiffness: 320,
								damping: 30
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: l.label
						})]
					}) }, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "bg-gradient-brand hidden rounded-full px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04] md:inline-flex",
					children: "Hire Me"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "rounded-xl border border-border p-2 md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "block rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground",
					children: l.label
				}) }, l.id))
			})
		})]
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 700);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "glass glass-hover fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full",
		"aria-label": "Back to top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5 text-primary" })
	});
}
var profile_default = "/assets/profile-SSRjMTNW.jpg";
var ROLES = [
	"AI/ML Engineer",
	"Machine Learning Enthusiast",
	"Data Science Explorer"
];
function Typewriter() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const full = ROLES[index % ROLES.length];
		const done = !deleting && text === full;
		const empty = deleting && text === "";
		const t = setTimeout(() => {
			if (done) return setDeleting(true);
			if (empty) {
				setDeleting(false);
				setIndex((i) => i + 1);
				return;
			}
			setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
		}, done ? 1500 : empty ? 250 : deleting ? 35 : 70);
		return () => clearTimeout(t);
	}, [
		text,
		deleting,
		index
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-gradient font-display",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary align-middle motion-safe:animate-pulse" })]
	});
}
var STATS = [
	{
		value: "2+",
		label: "AI Projects"
	},
	{
		value: "10+",
		label: "Technologies"
	},
	{
		value: "7th",
		label: "Semester B.Tech"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden px-4 pb-24 pt-36 sm:pt-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-accent" }), "Final year B.Tech · Information Technology"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl",
						children: [
							"Hello, I'm",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Pushpank Singh"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex items-center gap-2",
							children: "📍Noida, India"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 min-h-[2em] text-lg text-muted-foreground sm:text-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typewriter, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "I am an AI/ML Engineer currently in my final year of Information Technology engineering with a strong passion for Artificial Intelligence, Machine Learning, and Data Science. I enjoy building intelligent systems, developing machine learning models, and exploring the limitless capabilities of AI to solve real-world problems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "bg-gradient-brand glow-ring group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04]",
								children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }), "Contact Me"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/resume.pdf",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download Resume"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid max-w-md grid-cols-3 gap-3",
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl font-semibold text-gradient",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: s.label
							})]
						}, s.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .94
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .8,
					delay: .15,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative mx-auto w-full max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-gradient-brand absolute inset-6 rounded-full opacity-30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square rounded-full border border-primary/25 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "motion-safe:animate-[spin_18s_linear_infinite] absolute inset-0 rounded-full border border-dashed border-accent/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile_default,
						alt: "Portrait of Pushpank Singh",
						width: 816,
						height: 816,
						className: "size-full rounded-full object-cover"
					})]
				})]
			})]
		})]
	});
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeading({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.3em] text-accent",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold sm:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground sm:text-base",
				children: subtitle
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "About Me",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Building Intelligence, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Not Just Code"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "glass glass-hover rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-semibold",
							children: "Personal Bio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: "I am an AI/ML Engineer currently in my last year of engineering in Information Technology. I have a deep interest in Data Science and Machine Learning model development. I am passionate about exploring Artificial Intelligence and continuously learning new technologies to build impactful AI solutions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: [
								{
									icon: ChartLine,
									label: "Data Science"
								},
								{
									icon: Layers,
									label: "Deep Learning"
								},
								{
									icon: Binary,
									label: "Reinforcement Learning"
								},
								{
									icon: Rocket,
									label: "Model Deployment"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/30 px-4 py-3 text-sm transition-colors hover:border-accent/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 text-accent" }), item.label]
							}, item.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "glass glass-hover rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-8 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-semibold",
							children: "Education"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 space-y-6 border-l border-border pl-6",
							children: [{
								title: "JSS Academy Of Technical Education, Noida",
								meta: "B.Tech in Information Technology, 2023 - 2027",
								note: "Grade : 7.76"
							}, {
								title: "T.R.M. Public School, Ghaziabad",
								meta: "12th",
								note: "Grade : 88.6 %"
							}].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `bg-gradient-brand absolute -left-[31px] top-1.5 size-3 rounded-full ${i === 1 ? "glow-ring motion-safe:animate-pulse" : ""}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-base font-semibold",
										children: e.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-primary",
										children: e.meta
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: e.note
									})
								]
							}, e.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-xs text-muted-foreground",
							children: "Expected graduation: 2027 · Open to AI/ML roles and internships."
						})
					]
				})]
			})]
		})
	});
}
var SKILL_GROUPS = [
	{
		icon: CodeXml,
		group: "Programming",
		skills: [
			{
				name: "Python",
				level: 92
			},
			{
				name: "C++",
				level: 78
			},
			{
				name: "SQL",
				level: 80
			}
		]
	},
	{
		icon: BrainCircuit,
		group: "Machine Learning",
		skills: [
			{
				name: "Machine Learning",
				level: 88
			},
			{
				name: "Deep Learning",
				level: 84
			},
			{
				name: "Data Science",
				level: 82
			}
		]
	},
	{
		icon: Layers,
		group: "Frameworks",
		skills: [{
			name: "PyTorch",
			level: 85
		}, {
			name: "TensorFlow",
			level: 80
		}]
	},
	{
		icon: Database,
		group: "Web & Tools",
		skills: [
			{
				name: "HTML",
				level: 85
			},
			{
				name: "CSS",
				level: 80
			},
			{
				name: "Git",
				level: 82
			}
		]
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Skills",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Toolkit"
					}),
					" Behind The Models"
				] }),
				subtitle: "Languages, frameworks and tools I use to design, train and ship machine learning systems."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2",
				children: SKILL_GROUPS.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: gi * .08,
					className: "glass glass-hover rounded-3xl p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "size-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: g.group
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-5",
						children: g.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: [s.level, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 overflow-hidden rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "bg-gradient-brand h-full rounded-full",
								initial: { width: 0 },
								whileInView: { width: `${s.level}%` },
								viewport: { once: true },
								transition: {
									duration: 1.1,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							})
						})] }, s.name))
					})]
				}, g.group))
			})]
		})
	});
}
var PROJECTS = [
	{
		id: "summarizer",
		title: "Text Summarizer App",
		category: "Deep Learning",
		icon: Grid3x3,
		tech: [
			"HuggingFace",
			"Transformers",
			"PyTorch"
		],
		description: "Developed a Text Summarizer web application using the Hugging Face T5 Transformer model to generate concise and context-aware summaries.",
		extra: "Implemented an end-to-end NLP pipeline with Python, Transformers, and FastAPI, enabling efficient text preprocessing and real-time summary generation with a responsive user experience.",
		links: [{
			label: "GitHub",
			href: "https://github.com/pushpank-singh1/Text-Summarizer-App",
			icon: Github
		}, {
			label: "Live Demo",
			href: "https://github.com/pushpank-singh1/Text-Summarizer-App",
			icon: ArrowUpRight
		}]
	},
	{
		id: "flappy",
		title: "Flappy Bird AI",
		category: "Deep Learning",
		icon: Gamepad2,
		tech: [
			"PyTorch",
			"Gymnasium",
			"Deep Q-Networks (DQN)",
			"Deep RL"
		],
		description: "Developed an AI agent capable of playing Flappy Bird using Deep Q-Networks and Deep Reinforcement Learning. The model learns optimal flap timings through trial-and-error interactions with the game environment.",
		extra: "Trained and evaluated the model by maximizing cumulative rewards, enabling improved obstacle avoidance, increased survival time, and better gameplay performance over successive training episodes.",
		links: [{
			label: "GitHub",
			href: "https://github.com/pushpank-singh1/Flappy-Bird-Game",
			icon: Github
		}]
	},
	{
		id: "cliff",
		title: "Cliff Walking",
		category: "Reinforcement Learning",
		icon: Grid3x3,
		tech: [
			"NumPy",
			"Gymnasium",
			"Reinforcement Learning"
		],
		description: "Developed a reinforcement learning agent using the Gymnasium Toy Text environment where the agent learns an optimal navigation policy by interacting with the environment, avoiding cliff states, and maximizing cumulative rewards.",
		extra: "Implemented the Q-learning algorithm to compare path selection and visualize the agent's improvement over training episodes until it consistently discovers the shortest path to the goal.",
		links: [{
			label: "GitHub",
			href: "https://github.com/pushpank-singh1/Cliff-Walking",
			icon: Github
		}]
	}
];
var FILTERS = [
	"All",
	"Reinforcement Learning",
	"Deep Learning"
];
/** Small animated visual standing in for each project's environment. */
function ProjectVisual({ id }) {
	if (id === "summarizer") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full w-full items-center justify-between gap-6 px-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass flex h-28 w-32 flex-col rounded-xl border border-primary/20 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-7 w-7 rounded-md bg-primary/20 flex items-center justify-center",
						children: "📄"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-semibold",
						children: "Input"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 rounded-full bg-primary/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 rounded-full bg-primary/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-5/6 rounded-full bg-primary/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-3/4 rounded-full bg-primary/20" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full bg-gradient-brand p-4 shadow-lg",
					children: "🤖"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 text-[10px] text-primary font-medium",
					children: "T5 AI"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass flex h-28 w-32 flex-col rounded-xl border border-accent/20 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-7 w-7 rounded-md bg-accent/20 flex items-center justify-center",
						children: "✨"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-semibold",
						children: "Summary"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-4/5 rounded-full bg-accent/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-3/5 rounded-full bg-accent/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-2/5 rounded-full bg-accent/25" })
					]
				})]
			})
		]
	});
	if (id === "cliff") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid w-fit grid-cols-8 gap-1.5",
		children: Array.from({ length: 32 }).map((_, i) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-5 w-5 rounded-md ${i === 31 ? "bg-green-400" : i === 24 ? "bg-blue-400" : i >= 24 && i > 24 && i < 31 ? "bg-red-500" : "bg-secondary"}` }, i);
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-400/20 to-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-10 w-full bg-green-500/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-8 top-8 h-8 w-8 rounded-full bg-yellow-300 shadow-lg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-4 h-28 w-5 rounded-full bg-green-400" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 bottom-0 h-18 w-5 rounded-full bg-green-400" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-1/4 top-10 h-22 w-5 rounded-full bg-green-400" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-1/4 bottom-0 h-24 w-5 rounded-full bg-green-400" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-20 top-16 text-3xl",
				children: "🐦"
			})
		]
	});
}
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Portfolio",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Featured ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "AI Projects"
					})] }),
					subtitle: "Agents that learn by doing — trained, evaluated and tuned end to end."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10 flex flex-wrap justify-center gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: `rounded-full px-4 py-2 text-sm transition-all ${filter === f ? "bg-gradient-brand glow-ring text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"}`,
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "mt-10 grid gap-6 lg:grid-cols-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: visible.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							layout: true,
							initial: {
								opacity: 0,
								y: 24,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .96
							},
							transition: {
								duration: .45,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "glass glass-hover group flex flex-col overflow-hidden rounded-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-44 overflow-hidden border-b border-border bg-secondary/30 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-gradient-brand absolute inset-x-10 -top-16 h-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-full items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, { id: p.id })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/25",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-4 text-accent" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-semibold",
											children: p.title
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary",
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground",
										children: p.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: p.extra
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-3 pt-2",
										children: p.links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: l.href,
											target: "_blank",
											rel: "noreferrer",
											className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.04] ${i === 0 ? "bg-gradient-brand text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "size-4" }), l.label]
										}, l.label))
									})
								]
							})]
						}, p.id))
					})
				})
			]
		})
	});
}
var EMAIL = "pushpank1108@gmail.com";
var LINKEDIN = "https://www.linkedin.com/in/pushpanksingh/";
var GITHUB = "https://github.com/pushpank-singh1";
var CHANNELS = [
	{
		label: "Email",
		value: EMAIL,
		href: `mailto:${EMAIL}`,
		icon: Mail,
		copy: EMAIL
	},
	{
		label: "LinkedIn",
		value: "/in/pushpanksingh",
		href: LINKEDIN,
		icon: Linkedin,
		copy: LINKEDIN
	},
	{
		label: "GitHub",
		value: "@pushpank-singh1",
		href: GITHUB,
		icon: Github,
		copy: GITHUB
	}
];
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(null);
	const copy = async (label, value) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(label);
			toast.success(`${label} copied to clipboard`);
			setTimeout(() => setCopied(null), 1800);
		} catch {
			toast.error("Couldn't copy — please copy manually");
		}
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
		const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
		window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		toast.success("Opening your email client…");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's Build Something ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Intelligent"
				})] }),
				subtitle: "Open to AI/ML roles, internships and research collaborations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "glass rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Reach me directly"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: CHANNELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/30 p-3 transition-colors hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.href,
									target: "_blank",
									rel: "noreferrer",
									className: "flex min-w-0 flex-1 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/25",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-4 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-muted-foreground",
											children: c.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-sm",
											children: c.value
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => copy(c.label, c.copy),
									"aria-label": `Copy ${c.label}`,
									className: "rounded-xl border border-border p-2 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent",
									children: copied === c.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
								})]
							}, c.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${EMAIL}`,
							className: "bg-gradient-brand mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Email Me"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "glass rounded-3xl p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: "Send a message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 grid gap-4",
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										required: true,
										placeholder: "Your name",
										className: "rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "email",
										type: "email",
										required: true,
										placeholder: "you@company.com",
										className: "rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									rows: 6,
									placeholder: "Tell me about the role or project…",
									className: "resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "bg-gradient-brand glow-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Send Message"]
							})
						]
					})]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-muted-foreground sm:text-left",
				children: "© 2026 Pushpank Singh. Built with passion for Artificial Intelligence."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3",
				children: [
					{
						href: GITHUB,
						icon: Github,
						label: "GitHub"
					},
					{
						href: LINKEDIN,
						icon: Linkedin,
						label: "LinkedIn"
					},
					{
						href: `mailto:${EMAIL}`,
						icon: Mail,
						label: "Email"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: s.href,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": s.label,
					className: "glass glass-hover grid size-10 place-items-center rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4 text-primary" })
				}, s.label))
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientBackdrop, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
	] });
}
//#endregion
export { Index as component };
