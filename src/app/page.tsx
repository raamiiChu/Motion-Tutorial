import Link from "next/link";

import {
  H1,
  H2,
  List,
  P,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Table,
} from "@/components/ui/typography";

import { AnimateSection, GsapIcon, MotionIcon } from "./_components";

export default function Home() {
  return (
    <div className="container mx-auto space-y-12">
      <H1>Introduction</H1>
      <AnimateSection>
        <H2>What is Motion?</H2>

        <Link
          href="https://motion.dev/"
          target="_blank"
          className="inline-block transition-all hover:scale-105"
        >
          <MotionIcon />
        </Link>

        <P>
          Motion (formerly known as Framer Motion) is a powerful animation
          library, designed specifically for React, but also available for Vue
          and vanilla JavaScript. It focuses on being declarative,
          high-performance, and easy to use.
        </P>
      </AnimateSection>

      <AnimateSection>
        <H2>Why Choose Motion?</H2>
        <div className="bg-secondary rounded-lg p-4">
          <List>
            <li>
              <P>Intuitive and beginner-friendly</P>
              <P>
                Built on React props, so it&apos;s easy to pick up without a
                steep learning curve.
              </P>
            </li>
            <li>
              <P>Zero-config to get started</P>
              <P>Works out of the box with performance-focused defaults.</P>
            </li>
            <li>
              <P>Highly customizable</P>
              <P>
                Use variants, animation control hooks, and custom transitions
                for advanced orchestration.
              </P>
            </li>
            <li>
              <P>Strong community and documentation</P>
              <P>
                Actively maintained with plenty of tutorials, examples, and{" "}
                <Link
                  href="https://github.com/motiondivision/motion"
                  target="_blank"
                  className="underline"
                >
                  GitHub
                </Link>{" "}
                stars.
              </P>
            </li>
          </List>
        </div>
      </AnimateSection>

      <AnimateSection>
        <H2>Motion vs GSAP</H2>

        <Table>
          <THead>
            <TR>
              <TH>Feature</TH>
              <TH>
                <span className="flex items-center gap-2">
                  Motion{" "}
                  <Link
                    href="https://motion.dev/"
                    target="_blank"
                    className="transition-all hover:scale-105"
                  >
                    <MotionIcon className="size-10" />
                  </Link>
                </span>
              </TH>
              <TH>
                <span className="flex items-center gap-2">
                  GSAP{" "}
                  <Link
                    href="https://gsap.com/"
                    target="_blank"
                    className="transition-all hover:scale-105"
                  >
                    <GsapIcon className="size-10" />
                  </Link>
                </span>
              </TH>
            </TR>
          </THead>
          <TBody>
            <TR>
              <TD>Framework</TD>
              <TD>
                All frameworks; supports React, Vue, Angular, plain JS, etc.
              </TD>
              <TD>
                Originally built for React, now also supports Vanilla JS and Vue
              </TD>
            </TR>
          </TBody>
          <TBody>
            <TR>
              <TD>Timeline Control</TD>
              <TD>Powerful timeline system with precise sequence control</TD>
              <TD>
                Supports keyframes, exit animations, and sequencing, but not as
                flexible as GSAP
              </TD>
            </TR>
          </TBody>
          <TBody>
            <TR>
              <TD>Performance & Bundle Size</TD>
              <TD>Minified \~23 KB; full functionality, not tree-shakable</TD>
              <TD>
                Core \~18 KB; mini modules \~2.6 KB; supports tree-shaking and
                optimized performance
              </TD>
            </TR>
          </TBody>
          <TBody>
            <TR>
              <TD>Plugin Features</TD>
              <TD>SVG, morphing, ScrollTrigger, Flip, Canvas/WebGL, etc.</TD>
              <TD>layout animation, gestures, and scroll-based animation</TD>
            </TR>
          </TBody>
          <TBody>
            <TR>
              <TD>Learning Curve</TD>
              <TD>
                Powerful but more complex API; React integration requires
                cleanup and management
              </TD>
              <TD>
                Declarative API fits React/Vue well; beginner-friendly syntax
              </TD>
            </TR>
          </TBody>
          <TBody>
            <TR>
              <TD>Price</TD>
              <TD>
                Completely free
                <br />
                <Link
                  href="https://gsap.com/pricing/"
                  target="_blank"
                  className="underline"
                >
                  Thanks to Webflow
                </Link>
              </TD>
              <TD>Completely free</TD>
            </TR>
          </TBody>
          <TBody>
            <TR>
              <TD>When to Use</TD>
              <TD>Simple / Interactive</TD>
              <TD>Complex / Performance Critical</TD>
            </TR>
          </TBody>
        </Table>
      </AnimateSection>
    </div>
  );
}
