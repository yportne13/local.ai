import { QuickLink } from "@localai/ui/link"
import { clsx } from "clsx"
import {
  ListSelect,
  ServerConnection,
  ShoppingCodeCheck,
  TriangleFlag
} from "iconoir-react"
import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import type { ReactNode } from "react"
import Balancer from "react-wrap-balancer"

import { BasicLayout } from "~features/layouts/base"
import {
  MacDownloadButton,
  UbuntuDownloadButton,
  WindowsDownloadButton
} from "~features/press/download-buttons"

const FeatureCard = ({
  Icon = TriangleFlag,
  title = "loremipsum",
  children = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit consequuntur nam distinctio blanditiis. Reprehenderit unde incidunt eaque alias nam aut. Beatae magni reiciendis sapiente illum quisquam fugiat tempore neque?` as ReactNode
}) => (
  <div className="p-8 md:w-1/3 w-full">
    <div className="bg-mauve-3 text-mauve-11 flex flex-col items-center p-12 rounded-lg">
      <div className="rounded-full bg-mauve-6 w-min p-4 mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      {children}
    </div>
  </div>
)

const IndexPage: NextPage = () => (
  <BasicLayout>
    <NextSeo
      title="local.ai"
      titleTemplate="%s – local.ai"
      description="local.ai enables developers to quickly test AI models locally."
      openGraph={{
        title: "Quickly test AI models on your local machine.",
        description:
          "local.ai enables developers to quickly test AI models in their local machine.",
        url: "https://www.localai.app",
        siteName: "local.ai",
        type: "website"
      }}
    />
    {/* <!-- Hero Section --> */}
    <section className="p-8 pt-16 md:px-20 flex flex-col md:flex-row gap-8 mb-16">
      <div className="container flex flex-col h-full">
        <h1 className="text-5xl md:text-6xl mb-8 text-mauve-12 font-medium max-w-5xl">
          <Balancer>
            Local AI Model <span className="text-blue-9">Management</span>,{" "}
            <span className="text-cyan-9">Verification</span>, and{" "}
            <span className="text-teal-9">Inferencing</span>.
          </Balancer>
        </h1>
        <p className="text-xl max-w-xl">
          <Balancer>
            Experiment with AI models locally with a native app designed to
            simplify the whole process.
          </Balancer>
        </p>
      </div>
      <div className="w-full md:w-4/5 flex flex-col gap-2">
        <video
          autoPlay
          loop
          muted
          controls
          className="rounded-lg w-full aspect-video">
          <source
            src="https://github.com/louisgv/local.ai/assets/6723574/900f6d83-0867-4aa1-886a-e3c59b144864"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <span className="text-sm text-gray-10">
          In this demo, local.ai is used to start an inference session with the{" "}
          <QuickLink
            className="text-blue-9"
            href="https://github.com/nlpxucan/WizardLM">
            WizardLM 7B model
          </QuickLink>
          . The chat interface is the sample chat app on{" "}
          <QuickLink className="text-blue-9" href="https://windowai.io/">
            window.ai
          </QuickLink>
        </span>
      </div>
    </section>

    <section className="w-full px-8 flex flex-col md:flex-row gap-4 items-center justify-center">
      <MacDownloadButton />
      <WindowsDownloadButton />
      <UbuntuDownloadButton />
    </section>

    {/* <!-- Features Section --> */}
    <section className="bg-mauve-1 py-20 px-8" id="features">
      <div
        className={clsx(
          "container mx-auto",
          "flex flex-col md:flex-row md:flex-wrap md:justify-center"
        )}>
        <FeatureCard Icon={ListSelect} title="Model Management">
          <div className="flex flex-col gap-2">
            <p className="h-24">
              Keep track of your AI models in one centralized location. Pick any
              directory!
            </p>
            <hr className="border-gray-6" />
            <p className="text-xs font-bold">Upcoming features:</p>
            <ul className="list-disc text-xs">
              <li>Resumable model downloader</li>
              <li>Nested directory</li>
              <li>Custom Sorting and Searching</li>
            </ul>
          </div>
        </FeatureCard>

        <FeatureCard Icon={ShoppingCodeCheck} title="Digest Verification">
          <div className="flex flex-col gap-2">
            <p className="h-24">
              {`Ensure the integrity of downloaded models with a robust MD5, SHA256, and Blake3 digest
              compute feature.`}
            </p>
            <hr className="border-gray-6" />
            <p className="text-xs font-bold">Upcoming features:</p>
            <ul className="list-disc text-xs">
              <li>Known-good model repository</li>
              <li>Blake3 quick check</li>
              <li>Model card</li>
            </ul>
          </div>
        </FeatureCard>

        <FeatureCard Icon={ServerConnection} title="Inferencing Server">
          <div className="flex flex-col gap-2">
            <p className="h-24">
              Start a local streaming server for AI inferencing in 3 clicks:
              Pick directory, load model, then start server.
            </p>
            <hr className="border-gray-6" />
            <p className="text-xs font-bold">Upcoming features:</p>
            <ul className="list-disc text-xs">
              <li>Support no streaming</li>
              <li>/audio</li>
              <li>/image</li>
            </ul>
          </div>
        </FeatureCard>
      </div>
    </section>
  </BasicLayout>
)

export default IndexPage
