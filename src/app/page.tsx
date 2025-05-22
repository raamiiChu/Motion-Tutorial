import { H1, H2, H3, List, P } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="container mx-auto">
      <H1>Framer Motion vs GSAP</H1>

      <section className="mb-12">
        <H2>What is Framer Motion?</H2>
        <P>
          Framer Motion is a production-ready motion library for React. It makes
          creating animations and interactions simple and declarative. Built on
          top of the Framer animation platform, it provides a powerful and
          flexible API for creating complex animations.
        </P>
        <div className="bg-secondary rounded-lg p-4">
          <H3>Key Features:</H3>
          <List>
            <li>Declarative animations</li>
            <li>Built specifically for React</li>
            <li>Simple API for complex animations</li>
            <li>Gesture support</li>
            <li>Layout animations</li>
            <li>Variants for orchestration</li>
          </List>
        </div>
      </section>

      <section className="mb-12">
        <H2>What is GSAP?</H2>
        <P>
          GSAP (GreenSock Animation Platform) is a professional-grade animation
          library that works with any JavaScript framework. It&apos;s known for
          its performance, flexibility, and extensive feature set.
        </P>
        <div className="bg-secondary rounded-lg p-4">
          <H3>Key Features:</H3>
          <List>
            <li>High performance animations</li>
            <li>Framework agnostic</li>
            <li>Advanced timeline control</li>
            <li>Extensive plugin ecosystem</li>
            <li>SVG animations</li>
            <li>ScrollTrigger for scroll-based animations</li>
          </List>
        </div>
      </section>

      <section className="mb-12">
        <H2>Key Differences</H2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-muted shadow-muted-foreground rounded-lg p-6">
            <H3>Framer Motion</H3>
            <List>
              <li>React-specific implementation</li>
              <li>More intuitive for React developers</li>
              <li>Better integration with React&apos;s component lifecycle</li>
              <li>Simpler learning curve for React projects</li>
              <li>Built-in gesture support</li>
            </List>
          </div>
          <div className="bg-muted shadow-muted-foreground rounded-lg p-6">
            <H3>GSAP</H3>
            <List>
              <li>Framework agnostic</li>
              <li>More powerful timeline control</li>
              <li>Better performance for complex animations</li>
              <li>More extensive plugin system</li>
              <li>Better for non-React projects</li>
            </List>
          </div>
        </div>
      </section>

      <section>
        <H2>When to Use Each</H2>
        <div className="bg-secondary rounded-lg p-6">
          <H3>Choose Framer Motion when:</H3>
          <List>
            <li>Working on a React project</li>
            <li>Need simple, declarative animations</li>
            <li>Want built-in gesture support</li>
            <li>Prefer a more React-native approach</li>
          </List>

          <H3>Choose GSAP when:</H3>
          <List>
            <li>Working on a non-React project</li>
            <li>Need complex timeline animations</li>
            <li>Performance is critical</li>
            <li>Need advanced SVG animations</li>
            <li>Want to use scroll-based animations</li>
          </List>
        </div>
      </section>
    </div>
  );
}
