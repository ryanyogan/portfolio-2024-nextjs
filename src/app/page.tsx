/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { PageHeader } from "@/components/page-header";

import socialLinks from "@/content/social-links.json";
import Link from "next/link";
import { SiDiscord, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

export const runtime = "edge";

export default function Home() {
  return (
    <Container className="my-20 lg:my-32">
      <PageHeader
        title={
          <>
            Hi! 👋 I&apos;m <span className="text-indigo-500">Ryan Yogan</span>,
            I am an engineering leader, and complete aviation nerd.
          </>
        }
      >
        <ul className="sm:-mr-5 -ml-5 flex items-center gap-2 text-4xl">
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-block p-5 hover:text-gray-800"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-block p-5 hover:text-gray-800"
            >
              <SiTwitter />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block p-5 hover:text-gray-800"
            >
              <SiGithub />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noreferrer"
              className="inline-block p-5 hover:text-gray-800"
            >
              <SiDiscord />
            </a>
          </li>
        </ul>
      </PageHeader>

      {/** Hero Introduction */}
      <main>
        <Grid className="my-20 lg:my-32 gap-y-20 text-xl">
          <div className="col-span-3">
            <h2 className="mt-8">My Chat-GPT Story 🤣</h2>
            <p className="leading-8">
              Embarking on my tech journey with a 386 computer, I quickly became
              the family IT department, graduating from building PCs to
              conjuring AOL "proggies" in Visual Basic. My love affair with
              server racks in chilly rooms was just the beginning, and my entry
              into{" "}
              <a
                className="underline text-indigo-600 hover:text-indigo-500"
                href="https://www.browardcenter.org/"
                target="_blank"
              >
                theater
              </a>
              ! Fast forward through a symphony of C#, PHP spells, and
              Rails-powered rollercoasters, and you'll find me professing my
              love for all things engineering. These days, I'm crafting video
              game masterpieces in Rust—so "unique" they're practically art, and
              hoarding leadership books like they're going out of style. My
              toolkit? A kaleidoscope of TypeScript frameworks so infamous, they
              dare not speak their names.
              <br />
              <br />
              I've navigated the startup scene from a cozy nook above a Chicago
              bar to the dizzying heights of corporate skyscrapers, only to
              realize my living room beats them all. Amidst a quirky
              relationship with Emacs and Clojure (we're complicated), I find
              Zen in configuring Neovim more than I do in housekeeping. I
              occasionally pine for the days of wrestling with ColdFusion, Perl,
              and coaxing that last table and gif into pixel-perfect harmony for
              IE6—ah, simpler times.
              <br />
              <br />
              My home doubles as an aircraft hangar, thanks to an obsession with
              tinkering on aircrafts and simulators. I've taken "home office" to
              new altitudes, recreating a commercial flight experience that's
              just one cranky passenger short of actual takeoff.
              <br />
            </p>
            <p className="leading-8"></p>
          </div>
          <div className="col-span-3 flex flex-col gap-y-40">
            <div className="bg-gradient-to-t from-transparent to-slate-200 p-8 rounded-xl">
              <h2 className="mt-0">
                Fun drives me,{" "}
                <span className="text-indigo-600 font-normal">
                  you motivate me.
                </span>
              </h2>
              <div className="leading-8">
                <p>
                  My drive is simple, I want you to be happy, the best user
                  experience, the best developer experience, the most kick-ass
                  work experience.
                </p>
                <p>
                  When it comes to the technicals, I have enjoyed the sub-title
                  of Generalist. I see value Rails, Django, Go, Elixir, Node,
                  .NET, Swift, React, Svelte, why yes; SQL and BASH!, VIM since
                  the iPhone release 📱.
                </p>
                <p>
                  I love it all, I see value in the proper tool for the job
                  these days. Moons ago, yeah, I would have bike-shedded with
                  you on `let vs const` 🤷
                </p>
              </div>

              <h2 className="mt-10">
                My loves,{" "}
                <span className="text-neutral-400 font-normal">
                  the reason I work
                </span>
              </h2>
              <div className="leading-8">
                <ul>
                  <li>👨‍👩‍👦‍👦 is my love.</li>
                  <li>🛩 is my joy.</li>
                  <li>🎸 is my jam.</li>
                  <li>🐕 & 🐈‍⬛ pain in the ass.</li>
                  <li>🚙 Detailing cars is my zen.</li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>

        <hr />

        {/* Articles Section */}
        <section className="my-20 lg:my-32">
          <header className="text-xl">
            <Grid>
              <div className="col-span-3">
                <h2 className="mt-0">Writing</h2>
                <p className="leading-8">
                  I made a commitment to 2024 that I will work on being open,{" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7161089259175645184/"
                    className="underline underline-offset-2 text-blue-600"
                  >
                    asking for help,
                  </a>{" "}
                  and publically writing. Let's see if I can stick to it this
                  time. I will ramble about leadership, engineering, life, and
                  soap-box... why not, my mom is most likely a majority of my
                  traffic.
                </p>
              </div>
            </Grid>
          </header>
          <Grid className="my-16 gap-y-20 justify-center sm:justify-start">
            <div></div>
          </Grid>
          <footer className="text-center mt-16">
            <Link href="/blog" className="button px-14 py-2">
              See more posts
            </Link>
          </footer>
        </section>
      </main>
    </Container>
  );
}
