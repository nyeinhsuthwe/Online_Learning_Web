import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { useApiQuery } from "@/hooks/useQuery"
import { Play } from "lucide-react"

interface Chapter {
  _id: string
  title: string
}

interface Episode {
  _id: string
  title: string
  description: string
  videoUrl: string
  chapter_id: Chapter
}
interface EpisodeResponse {
  data: Episode[]
}

export function Accordian() {
  const { data: episodesResponse } = useApiQuery<EpisodeResponse>({
    queryKey: ["episodes"],
    endpoint: `${import.meta.env.VITE_API_URL}/get-episode-list`,
  })


  const grouped = episodesResponse?.data?.reduce((acc, ep) => {
    const chapterId = ep.chapter_id._id
    if (!acc[chapterId]) {
      acc[chapterId] = {
        title: ep.chapter_id.title,
        episodes: []
      }
    }
    acc[chapterId].episodes.push(ep)
    return acc
  }, {} as Record<string, { title: string; episodes: Episode[] }>) || {}

  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(grouped).map(([chapterId, chapter]) => (
        <AccordionItem key={chapterId} value={chapterId}>
          <AccordionTrigger className="text-[18px] text-gray-600">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <span>{chapter.title}</span>
              </div>

              {/* Right group: Lesson count */}
              <div className="text-gray-500 text-[15px]">
                {chapter.episodes.length} lessons
              </div>
            </div>
          </AccordionTrigger>


          <AccordionContent className="flex flex-col gap-3">
            {chapter.episodes.map((ep, index) => (
              <Card key={ep._id} className="gap-3 p-3">
                <div className="flex justify-between items-center w-full">

                  {/* Left side */}
                  <div className="flex gap-3 items-center">
                    <span className="w-9 h-9 bg-sky-500 font-bold text-white flex items-center justify-center rounded">
                      {index + 1}
                    </span>
                    <span className="flex hover:text-text-skyblue text-[16px] text-text-secondary font-semibold items-center">
                      {ep.title}
                    </span>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center">
                    <span className="w-15 h-9 bg-primary-dark font-bold text-white flex items-center justify-center rounded">
                      <Play size={18} />
                    </span>
                  </div>
                </div>
              </Card>

            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>

  )
}
