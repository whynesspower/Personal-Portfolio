import { useEffect, useState } from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import SubscribeForm from "../components/SubscribeForm.js";
import Parser from "rss-parser";
import LeftAlignedTimeline from "../components/VerticalTimeline";
import TechStack from "../components/TechStack/TechStack";
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDown";
import Ga from "../components/GoogleAnalytics/ga";
export default function Home(props) {
  const [showTip, setShowTip] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsedExperience, setIsCollapsedExperience] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsedExperience(true);
    setIsCollapsed(!isCollapsed);
  };
  const toggleCollapse2 = () => {
    setIsCollapsedExperience(!isCollapsedExperience);
  };
  useEffect(() => {
    setShowTip(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <Ga />
        <title> whynesspower | Yashraj Shukla</title>
        <meta name="description" content="Respect the grind! | whynesspower" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <img className={styles.avatar} src="/whynesspower.png" />
          <h1 className={styles.title}>Yashraj Shukla</h1>
          <p>Software Development Engineer</p>
        </section>

        <div className={styles.buttonContainerPower}>
          <div className={styles.parentHolder} onClick={toggleCollapse2}>
            <div className={styles.bio_link}>
              <span>
                <span style={{ marginRight: 10 }}>🌠</span>
                See My Work Experience
              </span>
              <ArrowDropDownCircleIcon
                className={isCollapsedExperience ? "" : styles.rotate180}
              />
            </div>
          </div>
          {!isCollapsedExperience && <LeftAlignedTimeline />}
          <div className={styles.parentHolder} onClick={toggleCollapse}>
            <div className={styles.bio_link}>
              <span>
                <span style={{ marginRight: 10 }}>🚀</span> See My Projects &
                Tech Stack.
              </span>
              <ArrowDropDownCircleIcon
                className={isCollapsed ? "" : styles.rotate180}
              />
            </div>
          </div>

          <div className={styles.techStackContainer}>
            {!isCollapsed && (
              <TechStack className={isCollapsed ? "" : styles.rotateIcon} />
            )}
          </div>
        </div>

        <div className={styles.sections}>
          <section>
            <h2>About me</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>💼</span>
                  Computer Science Engineering <br />
                </div>
                <div className={styles.subtitle}>
                  {" "}
                  Jabalpur Engineering College, JEC
                </div>
                <div className={styles.subtitle}>2020 - 2024</div>
              </li>

              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>📧</span>
                  <a href="mailto:yashrajshukla48@gmail.com" target="_blank">
                    Email
                  </a>
                </div>
                <div className={styles.subtitle}>yashrajshukla48@gmail.com</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>📝</span>
                  <a
                    href="https://drive.google.com/file/d/16dqsIlAyRBbjbfmYf6qry-sMshvjHGL5/view?usp=sharing"
                    target="_blank"
                  >
                    Resume (CV)
                  </a>
                </div>
                <div className={styles.subtitle}>Download Resume</div>
              </li>
            </ul>
          </section>
          {/* <section>
            <h2>My Products</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>🧠</span>
                  <a href="https://www.typingmind.com">TypingMind.com</a>
                </div>
                <div className={styles.subtitle}>A better UI for ChatGPT!</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>🧰</span>
                  <a href="https://devutils.app">DevUtils.app</a>
                </div>
                <div className={styles.subtitle}>{props.devutils}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>🎩</span>
                  <a href="https://blackmagic.so">BlackMagic.so</a>
                </div>
                <div className={styles.subtitle}>{props.blackmagic}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>📸</span>
                  <a href="https://xnapper.com">Xnapper</a>
                </div>
                <div className={styles.subtitle}>Released recently!</div>
              </li>
            </ul>
          </section> */}
          <section>
            <h2>Code</h2>
            <ul className={styles.list}>
              <li>
                <span style={{ marginRight: "10px" }}>⌨️</span>
                <a href="https://github.com/whynesspower" target="_blank">
                  GitHub
                </a>
                <div className={styles.subtitle}>Last commit: Today</div>
              </li>
            </ul>
          </section>

          <section>
            <h2>Social Media</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>💼</span>
                  <a
                    href="https://www.linkedin.com/in/whynesspower/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className={styles.subtitle}>I post once a week</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>🐦</span>
                  <a href="https://twitter.com/whynesspower2" target="_blank">
                    Twitter
                  </a>
                </div>
                <div className={styles.subtitle}>{props.tweets}</div>
              </li>

              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>🖼️</span>
                  <a href="https://instagram.com/whynesspower" target="_blank">
                    Instagram
                  </a>
                </div>
                <div className={styles.subtitle}>Infrequent travel pics</div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Writings</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>💌</span>
                  <a href="https://whynesspower.substack.com" target="_blank">
                    Newsletter
                  </a>
                </div>
                <div className={styles.subtitle}>{props.newsletter}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: "10px" }}>✏️</span>
                  <a
                    href="https://whynesspower.notion.site/Yashraj-s-Notes-707f7902467541f7a47ff3eb46c90953?pvs=4"
                    target="_blank"
                  >
                    Micro Blog <br /> and Public Notes
                  </a>
                </div>
                <div className={styles.subtitle}>Notes, tips, and FAQs</div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {showTip ? (
        <ReactTooltip
          multiline={true}
          overridePosition={({ left, top }, _e, _t, node) => {
            return {
              top,
              left: typeof node === "string" ? left : Math.max(left, 0),
            };
          }}
        />
      ) : null}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          html,
          body {
            color-scheme: dark;
            background: #141414;
            color: white;
          }
        }
      `}</style>
    </div>
  );
}

function fromNow(
  date,
  nowDate = Date.now(),
  rft = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" })
) {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;
  const intervals = [
    { ge: YEAR, divisor: YEAR, unit: "year" },
    { ge: MONTH, divisor: MONTH, unit: "month" },
    { ge: WEEK, divisor: WEEK, unit: "week" },
    { ge: DAY, divisor: DAY, unit: "day" },
    { ge: HOUR, divisor: HOUR, unit: "hour" },
    { ge: MINUTE, divisor: MINUTE, unit: "minute" },
    { ge: 30 * SECOND, divisor: SECOND, unit: "seconds" },
    { ge: 0, divisor: 1, text: "just now" },
  ];
  const now =
    typeof nowDate === "object"
      ? nowDate.getTime()
      : new Date(nowDate).getTime();
  const diff =
    now - (typeof date === "object" ? date : new Date(date)).getTime();
  const diffAbs = Math.abs(diff);
  for (const interval of intervals) {
    if (diffAbs >= interval.ge) {
      const x = Math.round(Math.abs(diff) / interval.divisor);
      const isFuture = diff < 0;
      return interval.unit
        ? rft.format(isFuture ? x : -x, interval.unit)
        : interval.text;
    }
  }
}
