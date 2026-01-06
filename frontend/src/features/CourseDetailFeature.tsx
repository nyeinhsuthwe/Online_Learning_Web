import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AboutCourse } from "./AboutCourse"
import { Card } from "@/components/ui/card"

export function CourseDetailFeature() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="grid grid-cols-2 gap-6 items-start">
            <div className=" space-y-9 ">
                <div className="space-y-4">
                    <h1 className="text-4xl font-semibold text-text-yellow">
                        React Basic to Advanced
                    </h1>

                    <p className="text-justify text-text-skyblue text-[16px]">
                        <span className={expanded ? "" : "line-clamp-3"}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                            dolore, possimus ullam esse officia hic? Reprehenderit accusamus
                            aperiam dolor, laborum quidem nihil dolorum deserunt vel, tempore
                            velit itaque incidunt non. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Totam quam rerum eveniet quis deleniti
                            necessitatibus, voluptatum accusamus quos corporis aperiam,
                            perferendis sint recusandae ducimus illum, molestias voluptatibus
                            atque architecto! Quas?
                        </span>

                        <button
                            onClick={() => setExpanded(!expanded)}
                            className={` inline text-text-skyblue font-medium hover:underline ${expanded ? "ml-1" : ""}`}
                        >
                            {expanded ? " see less" : " see more..."}
                        </button>
                    </p>

                    <div className=" grid grid-cols-2 gap-3 ">
                        <Button className="bg-primary-dark h-12 text-[16px] rounded-lg hover:bg-primary-hover">Enrolled Now</Button>
                        <Button className="bg-text-yellow h-12 text-[16px] rounded-lg hover:bg-yellow-500"> Watch Now</Button>
                    </div>
                    <Button className="border bg-bg-navbar hover:bg-bg-navbar text-text-secondary border-text-yellow w-full h-12 text-[16px] rounded-lg"> Watch Later</Button>
                </div>
                <AboutCourse />
            </div>
            <Card className="rounded-md overflow-hidden py-0 text-white font-semibold text-[14px]">
                <span className="block bg-primary-dark px-3 py-2 rounded-t-md">
                    Simple Lesson Video
                </span>

                <div className="p-3">
                    <video
                        src="/simplevd.mp4"
                        controls
                        className="w-full rounded-md"
                    />
                </div>
            </Card>

        </div>
    )
}
