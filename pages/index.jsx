import { useRef, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Wrapper from "components/Wrapper"
import Text from "components/Text"
import Button from "components/Button"
import Loader from "components/Loader"
import data from "data/data.json"
import { useScreenSize } from "hooks/useScreenSize"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { isMobile } from "react-device-detect"

function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const row1 = useRef()
  const row2 = useRef()
  const rowsWrapper = useRef()
  const img = useRef()
  const wrapper = useRef()
  const screenSize = useScreenSize()

  const animate = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(row1.current, {
      x: () => `-7rem`,
      ease: "none",
      scrollTrigger: {
        trigger: rowsWrapper.current,
        scrub: 2,
        end: () => `-=7rem`,
        invalidateOnRefresh: true,
      },
    })

    gsap.registerPlugin(ScrollTrigger)
    gsap.to(row2.current, {
      x: () => `+7rem`,
      ease: "none",
      scrollTrigger: {
        trigger: rowsWrapper.current,
        scrub: 2,
        end: () => `-=7rem`,
        invalidateOnRefresh: true,
      },
    })

    gsap.registerPlugin(ScrollTrigger)
    gsap.from(img.current, { x: () => "-24em" })
    gsap.to(img.current, {
      x: () => `-6em`,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper.current,
        scrub: 2,
        end: () => `=+18em`,
        invalidateOnRefresh: true,
      },
    })
  }

  const imgLoaded = () => {
    setIsLoading(false)
    animate()
  }

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>pearOS - Official Website</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pearos.xyz" />
        <meta property="og:title" content="pearOS - Official Website" />
        <meta
          property="og:description"
          content="pearOS is a linux distribution that aims for UI and UX, offering a mac like feeling, now even on older PCs. Why hackintosh when you can pearintosh? Try it now, it&#39;s free!"
        />
        <meta
          property="description"
          content="pearOS is a linux distribution that aims for UI and UX, offering a mac like feeling, now even on older PCs. Why hackintosh when you can pearintosh? Try it now, it&#39;s free!"
        />
      </Head>

      <Wrapper>
        <div className="z-20 min-h-screen flex flex-col items-center justify-center">
          <Text type="title">{data.homepage.hero.title}</Text>
          <Text type="paragraph" styles="z-20 max-w-md text-center opacity-75 mt-5">
            {data.homepage.hero.paragraph}
          </Text>
          <Link href={"/downloads"} passHref>
            <a>
              <Button type="primary" styles="z-20 mt-10">
                Get pearOS
              </Button>
            </a>
          </Link>
        </div>
        <div className="z-20 mt-36 flex flex-col items-center">
          <Text type="subtitle" style="text-2xl">
            {data.homepage.section1.title}
          </Text>
          <Text type="paragraph" styles="z-20 max-w-md text-center sm:text-left opacity-75 mt-5">
            {data.homepage.section1.paragraph}
          </Text>
          <div className="z-20 flex flex-col gap-10 mt-16" ref={rowsWrapper}>
            <div className="z-20 flex gap-24 translate-x-28" ref={row1}>
              {data.homepage.section1.images.map(
                (image, index) =>
                  index <= 3 && (
                    <Image
                      className="z-20 rounded-2xl"
                      layout={screenSize < 600 ? "fixed" : undefined}
                      alt={image.alt}
                      src={image.src}
                      width={!(screenSize < 640) ? image.width : image.width / 6}
                      height={!(screenSize < 640) ? image.height : image.height / 6}
                      onLoad={imgLoaded}
                      loading={"lazy"}
                      key={index}
                    />
                  )
              )}
            </div>
            <div className="z-20 flex gap-24 -translate-x-28" ref={row2}>
              {data.homepage.section1.images.map(
                (image, index) =>
                  index > 3 && (
                    <Image
                      className="z-20 rounded-2xl"
                      layout={screenSize < 600 ? "fixed" : undefined}
                      alt={image.alt}
                      src={image.src}
                      width={!(screenSize < 640) ? image.width : image.width / 6}
                      height={!(screenSize < 640) ? image.height : image.height / 6}
                      onLoad={imgLoaded}
                      loading={"eager"}
                      key={index}
                    />
                  )
              )}
            </div>
          </div>
        </div>
        <div className="z-20 sm:px-0 mt-48 flex flex-col items-center">
          <Text type="subtitle" styles="z-20 text-2xl">
            {data.homepage.section2.title}
          </Text>
          <Text type="paragraph" styles="z-20 max-w-xl text-center opacity-75 mt-5 mb-16">
            {data.homepage.section2.paragraph}
          </Text>
          <Image
            className="z-20 rounded-2xl"
            alt={data.homepage.section2.image.alt}
            src={data.homepage.section2.image.src}
            width={isMobile ? data.homepage.section2.image.width : data.homepage.section2.image.width / 3}
            height={isMobile ? data.homepage.section2.image.height : data.homepage.section2.image.height / 3}
          />
        </div>
        <div className="z-20 mt-48 flex sm:flex-col-reverse items-center justify-between" ref={wrapper}>
          <div ref={img}>
            <Image
              className="z-20 rounded-2xl"
              alt={data.homepage.section3.image.alt}
              src={data.homepage.section3.image.src}
              width={isMobile ? data.homepage.section3.image.width : data.homepage.section3.image.width / 2}
              height={isMobile ? data.homepage.section3.image.height : data.homepage.section3.image.height / 2}
              lazyRoot={img}
            />
          </div>
          <div className="z-20 flex flex-col text-right sm:text-left mr-12 sm:mr-0">
            <Text type="subtitle" style="text-2xl">
              {data.homepage.section3.title}
            </Text>
            <Text type="paragraph" styles="z-20 max-w-md sm:max-w-base opacity-75 mt-5 mb-16">
              {data.homepage.section3.paragraph}
            </Text>
          </div>
        </div>
        <div className="z-20 flex mb-20">
          <div className="z-20 px-12 sm:px-0">
            <Text type="subtitle" styles="z-20 overflow-hidden mt-32">
              {data.homepage.section4.title}
            </Text>
            <div className="z-20 grid grid-cols-2 sm:grid-cols-1 grid-rows-3 gap-12 mt-14">
              {data.homepage.section4.questions.map((question, index) => (
                <div className="z-20 max-w-lg" key={index}>
                  <Text type="small-title" styles="z-20 mb-2 opacity-80">
                    {question.question}
                  </Text>
                  <Text type="paragraph" styles="z-20 opacity-60">
                    {question.answer}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Home
