import Navbar from "@/components/Navbar";
import Tab from "@/components/Tab";
import WorkButton from "@/components/WorkButton";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full bg-dark">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto w-[90%] md:w-[75%]">
        {/* Header */}
        <div
          id="header"
          className="flex h-screen flex-col justify-center pb-10 md:justify-end"
        >
          <p className="text-md font-code text-primary">Hi, my name is</p>
          <p className="p-2"></p>
          <p className="text-[3em] font-semibold leading-none text-white md:text-[3.5em] lg:text-[4em] xs:text-4xl">
            Reeve Barreto.
          </p>
          <p className="text-[3em] font-semibold leading-none text-light md:text-[3.5em] lg:text-[4em] xs:text-4xl">
            I build things for the Web.
          </p>
          <p className="p-4"></p>
          <p className="md:text-md max-w-lg text-light xs:text-sm">
            Just your average run of the mill computer science graduate who is
            very interested in web development and technology. Currently, I’m
            focused on building my portfolio.
          </p>
          <p className="p-4"></p>
          <WorkButton />
        </div>

        <p className="p-4"></p>

        {/* About Me Section */}
        <div id="about" className="flex min-h-screen flex-col md:p-8">
          <div className="flex w-full items-center md:max-w-[66%]">
            <div>
              <span className="font-code text-lg text-primary">01. </span>
              <span className="text-2xl font-semibold text-white">
                About Me
              </span>
            </div>
            <p className="p-2"></p>
            <div className="h-[1px] grow border border-light_dark"></div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="col-span-3 text-light md:col-span-2 xs:text-sm">
              <span>
                Hi there! My name is Reeve and I’m from Goa, India. I began my
                journey into the web development world in early 2020. This was
                during the pandemic and I had a lot of time to learn. But still,
                CSS always makes me refer the internet for mundane things!
              </span>
              <p className="p-2"></p>
              <span>
                Fast forward to today, I’ve recently completed my Bachelors in
                Science in Computer Science from{" "}
                <span className="text-primary">
                  {" "}
                  Parvatibai Chowgule College of Arts & Science
                </span>
                . In that time I’ve had the privilege of interning for a{" "}
                <span className="text-primary">
                  traceability and visions company
                </span>
                , and I have also done freelance work for a{" "}
                <span className="text-primary">local business</span>.
              </span>
              <p className="p-2"></p>
              <span>
                I now have the time to build projects like I’ve always wanted
                before my further studies and it’s pretty exciting!
              </span>
              <p className="p-2"></p>
              <span>
                Here are a few technologies I’ve been working with recently:
              </span>
              <ul className="mt-6 grid list-disc grid-cols-2 gap-2 font-code text-sm">
                <li>Typescript</li>
                <li>Nextjs</li>
                <li>tRPC</li>
                <li>Vercel</li>
                <li>Upstash</li>
                <li>Prisma</li>
              </ul>
            </div>
            <div className="grid place-items-start justify-items-center">
              <img
                src={"/me.png"}
                alt="Reeve"
                className="w-[80vw] max-w-[300px] rounded"
              />
            </div>
          </div>
        </div>

        <p className="p-4"></p>

        {/* Experience Section */}
        <div
          id="experience"
          className="mx-auto flex w-full flex-col md:max-w-[80%] md:p-8"
        >
          <div className="flex w-full items-center">
            <div>
              <span className="font-code text-lg text-primary">02. </span>
              <span className="text-2xl font-semibold text-white">
                Where I&apos;ve worked
              </span>
            </div>
            <p className="p-2"></p>
            <div className="h-[1px] grow border border-light_dark"></div>
          </div>
          <Tab />
          <p className="p-8"></p>
        </div>

        <p className="p-4"></p>

        {/* Work Section */}
        <div id="work" className="flex w-full flex-col sm:p-8">
          <div className="flex w-full items-center md:w-[70%]">
            <div>
              <span className="font-code text-lg text-primary">03. </span>
              <span className="text-2xl font-semibold text-white">
                Some Things I&apos;ve Built
              </span>
            </div>
            <p className="p-2"></p>
            <div className="h-[1px] grow border border-light_dark"></div>
          </div>

          <p className="p-6"></p>

          {/* Tasktank */}
          <div className="relative hidden p-4 md:flex">
            <a
              href="https://tasktank.vercel.app/signin"
              target="_blank"
              className="relative z-10 before:absolute before:inset-0 before:block before:rounded before:bg-primary/40 before:duration-300 before:hover:bg-primary/0"
            >
              <Image
                src={
                  "https://user-images.githubusercontent.com/81756283/235125837-359697e6-d580-441c-bbc1-57e9d79d1b20.png"
                }
                alt="tasktank dashboard"
                className="w-full max-w-lg rounded object-cover"
                width={600}
                height={400}
              />
            </a>
            <div className="absolute inset-0 flex flex-col items-end">
              <span className="font-code text-sm text-primary">
                Featured Project
              </span>
              <p className="p-1"></p>
              <a
                href="https://tasktank.vercel.app/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl font-medium text-white transition-all duration-300 hover:text-primary">
                  Tasktank
                </span>
              </a>
              <p className="p-2"></p>
              <div className="z-20 flex rounded bg-dark_light p-6 shadow-md transition-all hover:shadow-2xl">
                <span className="w-full max-w-sm text-right text-sm text-light">
                  Tasktank is a productivity application which can be used by
                  individuals or companies to create, assign tasks track their
                  progress.
                </span>
              </div>
              <p className="p-2"></p>
              <div className="flex font-code text-xs text-light">
                <span>T3 App</span>
                <p className="p-2"></p>
                <span>NextJS</span>
                <p className="p-2"></p>
                <span>Prisma</span>
                <p className="p-2"></p>
                <span>tRPC</span>
                <p className="p-2"></p>
                <span>TailwindCSS</span>
              </div>
              <p className="p-2"></p>
              <div className="flex">
                <a
                  href="https://github.com/reeveboy/tasktank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-lg text-white transition-all duration-300 hover:text-primary"
                  />
                </a>
                <p className="p-2"></p>
                <a
                  href="https://tasktank.vercel.app/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-lg text-white transition-all duration-300 hover:text-primary"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile ver */}
          <div className="rounded bg-dark_light px-6 py-10 shadow transition-all hover:shadow-lg md:hidden">
            <span className="font-code text-sm text-primary">
              Featured Project
            </span>
            <p className="p-1"></p>
            <a
              href="https://tasktank.vercel.app/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl font-medium text-white transition-all duration-300 hover:text-primary">
                Tasktank
              </span>
            </a>
            <p className="p-2"></p>
            <span className="w-full max-w-sm text-sm text-light">
              Tasktank is a productivity application which can be used by
              individuals or companies to create, assign tasks track their
              progress.
            </span>
            <p className="p-2"></p>
            <div className="flex flex-wrap font-code text-xs text-light">
              <span>T3 App</span>
              <p className="p-2"></p>
              <span>NextJS</span>
              <p className="p-2"></p>
              <span>Prisma</span>
              <p className="p-2"></p>
              <span>tRPC</span>
              <p className="p-2"></p>
              <span>TailwindCSS</span>
            </div>
            <p className="p-2"></p>
            <div className="flex">
              <a
                href="https://github.com/reeveboy/tasktank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg text-white transition-all duration-300 hover:text-primary"
                />
              </a>
              <p className="p-2"></p>
              <a
                href="https://tasktank.vercel.app/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-lg text-white transition-all duration-300 hover:text-primary"
                />
              </a>
            </div>
          </div>

          <p className="p-8 md:p-16"></p>

          {/* Anomus */}
          <div className="relative hidden p-4 md:flex md:flex-row-reverse">
            <a
              href="https://anomus.vercel.app/"
              target="_blank"
              className="relative z-10 before:absolute before:inset-0 before:block before:rounded before:bg-primary/40 before:duration-300 before:hover:bg-primary/0"
            >
              <Image
                src={
                  "https://user-images.githubusercontent.com/81756283/235133137-ceef3b57-134b-4685-8a92-b7a3f0527ea3.png"
                }
                alt="anomus homepage"
                className="w-full max-w-lg rounded object-cover"
                width={600}
                height={400}
              />
            </a>
            <div className="absolute inset-0 flex flex-col items-start">
              <span className="font-code text-sm text-primary">
                Featured Project
              </span>
              <p className="p-1"></p>
              <a
                href="https://anomus.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl font-medium text-white transition-all duration-300 hover:text-primary">
                  Anomus
                </span>
              </a>
              <p className="p-2"></p>
              <div className="z-20 flex rounded bg-dark_light p-6 shadow-md transition-all hover:shadow-2xl">
                <span className="w-full max-w-sm text-sm text-light ">
                  Anomus is a place to share anonymous messages about any topics
                  you want. I had first started this project to learn more about
                  the intricasies of NextJS and Prisma. And it turned out to be
                  pretty useful.
                </span>
              </div>
              <p className="p-2"></p>
              <div className="flex font-code text-xs text-light">
                <p className="p-2"></p>
                <span>NextJS</span>
                <p className="p-2"></p>
                <span>Prisma</span>
                <p className="p-2"></p>
                <span>TailwindCSS</span>
                <p className="p-2"></p>
                <span>tRPC</span>
              </div>
              <p className="p-2"></p>
              <div className="flex">
                <a
                  href="https://github.com/reeveboy/anomus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-lg text-white transition-all duration-300 hover:text-primary"
                  />
                </a>
                <p className="p-2"></p>
                <a
                  href="https://anomus.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-lg text-white transition-all duration-300 hover:text-primary"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile ver */}
          <div className="rounded bg-dark_light px-6 py-10 shadow transition-all hover:shadow-lg md:hidden">
            <span className="font-code text-sm text-primary">
              Featured Project
            </span>
            <p className="p-1"></p>
            <a
              href="https://anomus.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl font-medium text-white transition-all duration-300 hover:text-primary">
                Anomus
              </span>
            </a>
            <p className="p-2"></p>
            <span className="w-full max-w-sm text-sm text-light ">
              Anomus is a place to share anonymous messages about any topics you
              want. I had first started this project to learn more about the
              intricasies of NextJS and Prisma. And it turned out to be pretty
              useful.
            </span>
            <p className="p-2"></p>
            <div className="flex font-code text-xs text-light">
              <span>NextJS</span>
              <p className="p-2"></p>
              <span>Prisma</span>
              <p className="p-2"></p>
              <span>TailwindCSS</span>
              <p className="p-2"></p>
              <span>tRPC</span>
            </div>
            <p className="p-2"></p>
            <div className="flex">
              <a
                href="https://github.com/reeveboy/anomus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg text-white transition-all duration-300 hover:text-primary"
                />
              </a>
              <p className="p-2"></p>
              <a
                href="https://anomus.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-lg text-white transition-all duration-300 hover:text-primary"
                />
              </a>
            </div>
          </div>

          <p className="p-8 md:p-16"></p>

          {/* Citrus */}
          <div className="relative hidden p-4 md:flex ">
            <a
              href="https://github.com/reeveboy/citrus-web"
              target="_blank"
              className="relative z-10 before:absolute before:inset-0 before:block before:rounded before:bg-primary/40 before:duration-300 before:hover:bg-primary/0"
            >
              <Image
                src={
                  "https://user-images.githubusercontent.com/81756283/134859134-c03cde34-633b-49e3-be00-35f25c57ac6d.png"
                }
                alt="tasktank dashboard"
                className="w-full max-w-lg rounded object-cover"
                width={600}
                height={400}
              />
            </a>
            <div className="absolute inset-0 flex flex-col items-end">
              <span className="font-code text-sm text-primary">
                Featured Project
              </span>
              <p className="p-1"></p>
              <a
                href="https://tasktank.vercel.app/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl font-medium text-white transition-all duration-300 hover:text-primary">
                  Citrus
                </span>
              </a>
              <p className="p-2"></p>
              <div className="z-20 flex rounded bg-dark_light p-6 shadow-md transition-all hover:shadow-2xl">
                <span className="w-full max-w-sm text-right text-sm text-light">
                  Citrus was the first fullstack application I had ever built. I
                  used all the knowledge and skills I had gained from watching
                  youtube videos and put it all together. It was a great
                  learning experience and I&apos;m proud of what I had built.
                  <p className="p-2"></p>
                  Citrus is a POS Service for restaurants to track and manage
                  their bills and inventory.
                </span>
              </div>
              <p className="p-2"></p>
              <div className="flex font-code text-xs text-light">
                <span>React</span>
                <p className="p-2"></p>
                <span>GraphQl</span>
                <p className="p-2"></p>
                <span>Typescript</span>
                <p className="p-2"></p>
                <span>Apollo</span>
                <p className="p-2"></p>
                <span>Express</span>
              </div>
              <p className="p-2"></p>
              <div className="flex">
                <a
                  href="https://github.com/reeveboy/citrus-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-lg text-white transition-all duration-300 hover:text-primary"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile ver */}
          <div className="rounded bg-dark_light px-6 py-10 shadow transition-all hover:shadow-lg md:hidden">
            <span className="font-code text-sm text-primary">
              Featured Project
            </span>
            <p className="p-1"></p>
            <a
              href="https://tasktank.vercel.app/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl font-medium text-white transition-all duration-300 hover:text-primary">
                Citrus
              </span>
            </a>
            <p className="p-2"></p>
            <span className="w-full max-w-sm text-sm text-light">
              Citrus was the first fullstack application I had ever built. I
              used all the knowledge and skills I had gained from watching
              youtube videos and put it all together. It was a great learning
              experience and I&apos;m proud of what I had built.
              <p className="p-2"></p>
              Citrus is a POS Service for restaurants to track and manage their
              bills and inventory.
            </span>
            <p className="p-2"></p>
            <div className="flex flex-wrap font-code text-xs text-light">
              <span>React</span>
              <p className="p-2"></p>
              <span>GraphQl</span>
              <p className="p-2"></p>
              <span>Typescript</span>
              <p className="p-2"></p>
              <span>Apollo</span>
              <p className="p-2"></p>
              <span>Express</span>
            </div>
            <p className="p-2"></p>
            <div className="flex">
              <a
                href="https://github.com/reeveboy/citrus-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg text-white transition-all duration-300 hover:text-primary"
                />
              </a>
            </div>
          </div>
        </div>

        <p className="p-16"></p>

        {/* Contact */}
        <div
          id="contact"
          className="flex h-screen flex-col items-center justify-center text-center"
        >
          <span className="font-code text-sm text-primary">
            04. So What&apos;s Next?
          </span>
          <p className="p-3"></p>
          <span className="text-4xl font-semibold text-white">
            Get In Touch
          </span>
          <p className="p-2"></p>
          <span className="md:text-md w-full max-w-md text-light xs:text-sm">
            Since I have just completed my exams and I&apos;ll be officially
            graduating soon, I&apos;m open for any opportunities that come my
            way. Shoot me a DM or an email and I&apos;ll get back to you as soon
            as I can.
          </span>
          <p className="p-2"></p>
          <a
            href="mailto:reeveboy10@gmail.com"
            className="rounded border border-primary px-6 py-4 font-code text-sm text-primary"
          >
            Say Hi!
          </a>
        </div>

        <p className="p-4"></p>

        <div className="flex w-full justify-center md:hidden">
          <a
            href="https://github.com/reeveboy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-light transition-all duration-300 hover:text-primary"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p className="p-2"></p>
          <a
            href="https://www.instagram.com/reeeevve/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-light transition-all duration-300 hover:text-primary"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <p className="p-2"></p>
          <a
            href="https://www.linkedin.com/in/reeve-barreto-779620220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-light transition-all duration-300 hover:text-primary"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <p className="p-2"></p>

        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="flex cursor-pointer items-center justify-center text-sm text-light hover:text-primary"
        >
          <FontAwesomeIcon icon={faCode} className="" />
          <p className="p-1"></p>
          <span className="font-code ">Props to Brittany!</span>
        </a>
        <p className="p-4"></p>
      </main>

      {/* Side Socials */}
      <div className="fixed bottom-0 left-[5%] hidden -translate-x-1/2 flex-col items-center md:flex">
        <a
          href="https://github.com/reeveboy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-light transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <p className="p-2"></p>
        <a
          href="https://www.instagram.com/reeeevve/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-light transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <p className="p-2"></p>
        <a
          href="https://www.linkedin.com/in/reeve-barreto-779620220"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-light transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <p className="p-2"></p>
        <div className="h-20 w-[1px] border border-light"></div>
      </div>
      <div className="fixed bottom-0 right-[5%] hidden translate-x-1/2 flex-col items-center md:flex">
        <a
          href="mailto:reeveboy10@gmail.com"
          className="-translate-y-20 rotate-90 font-code text-sm text-light transition-all duration-300 hover:-translate-y-[5.5rem] hover:text-primary"
        >
          reeveboy10@gmail.com
        </a>
        <p className="p-2"></p>
        <div className="h-20 w-[1px] border border-light"></div>
      </div>
    </div>
  );
}
