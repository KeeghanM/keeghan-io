import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'
import { ArrowRight, Filter, Star } from 'lucide-react'
import { useState } from 'react'

type ProjectStatus =
  | 'All'
  | 'Production'
  | 'In Progress'
  | 'Deprecated'
type ProjectType = 'All' | 'WebApp' | 'Dev Tool'
type SortOption =
  | 'newest'
  | 'oldest'
  | 'alphabetical'
  | 'reverseAlphabetical'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  status?: 'Production' | 'In Progress' | 'Deprecated'
  type: 'WebApp' | 'Dev Tool'
  builtDate: string
  impact?: string
  featured?: boolean
}

export default function Projects() {
  const [statusFilter, setStatusFilter] =
    useState<ProjectStatus>('All')
  const [typeFilter, setTypeFilter] =
    useState<ProjectType>('All')
  const [tagFilter, setTagFilter] = useState<string[]>([])
  const [sortOption, setSortOption] =
    useState<SortOption>('newest')
  const [showFeaturedOnly, setShowFeaturedOnly] =
    useState<boolean>(false)

  const projects: Project[] = [
    {
      title: 'PixelPerfection',
      description:
        'A combination of FrontEndMentor CSS Challenges, and cantunsee.space design awareness. Welcome to PixelPerfection, the ultimate challenge for detail-oriented developers. Spot the differences, correct the code, and achieve pixel perfect results.',
      tags: [
        'Astro',
        'SolidJS',
        'TypeScript',
        'TailwindCSS',
        'OpenSource',
      ],
      link: 'https://pixel-perfection.keeghan.io/',
      status: 'In Progress',
      type: 'WebApp',
      builtDate: '01/08/2023',
      featured: true,
    },
    {
      title: 'proddr',
      description:
        'Your Product Management companion, Proddr leverages the power of Artificial Intelligence to transform your planning process. With it, fleshing out ideas, refining task descriptions, and anticipating stakeholder questions becomes effortless.',
      tags: [
        'Astro',
        'SolidJS',
        'TypeScript',
        'Artificial Intelligence',
        'Planetscale',
        'OpenSource',
      ],
      link: 'https://proddr.com',
      status: 'Deprecated',
      type: 'WebApp',
      builtDate: '01/07/2023',
    },
    {
      title: 'QuillArcadia',
      description:
        'A new tool for storytellers of all kinds. Built out of frustration with other solutions on the market, this tool is both highly opinionated while allowing a freedom of choice. Built for managing D&D campaigns, books, or any storytelling project.',
      tags: [
        'Astro',
        'SolidJS',
        'TypeScript',
        'Planetscale',
        'OpenSource',
      ],
      link: 'https://github.com/KeeghanM/quill-arcadia',
      status: 'Deprecated',
      type: 'WebApp',
      builtDate: '01/06/2023',
    },
    {
      title: 'ChessTraining.app',
      description:
        'Built as a way to teach myself React and NextJS in 3 weeks over the 2021 Christmas break, and since rebuilt ground up to support the App Router. Now with ~5000 Active Monthly Users, it provides powerful training tools backed by science and Grand Master training methods.',
      tags: [
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Chess',
        'OpenSource',
      ],
      link: 'https://www.chesstraining.app',
      status: 'Production',
      type: 'WebApp',
      builtDate: '25/12/2021',
      impact: '~5000 active monthly users',
      featured: true,
    },
    {
      title: 'Create Full-Stack Astro (CLI)',
      description:
        "A CLI tool which sets up my preferred tags-stack folder structure including connections to various Databases, CMS's, and my favourite default CSS configurations for rapid development of new projects.",
      tags: ['Node.js', 'CLI', 'OpenSource'],
      link: 'https://github.com/KeeghanM/create-full-stack-astro',
      status: 'Deprecated',
      type: 'Dev Tool',
      builtDate: '04/07/2023',
    },
    {
      title: 'Ultimate City Gen',
      description:
        'Procedurally generated cities for D&D campaigns. Every person, shop, street and building mapped out with details like tavern menus, store catalogues, and character descriptions.',
      tags: [
        'JavaScript',
        'P5.js',
        'Procedural Generation',
        'OpenSource',
      ],
      link: 'https://keeghanm.github.io/ultimate-city-gen/',
      status: 'Deprecated',
      type: 'WebApp',
      builtDate: '01/12/2022',
    },
    {
      title: 'Chess Puzzles API',
      description:
        'The backend for ChessTraining.app and a public API to request chess puzzles by rating, theme, and other factors. Built as a NodeJS server hosted in Oracle cloud with full text search capabilities.',
      tags: [
        'Node.js',
        'Express',
        'OracleDB',
        'API',
        'OpenSource',
      ],
      link: 'https://rapidapi.com/KeeghanM/api/chess-puzzles',
      status: 'Production',
      type: 'Dev Tool',
      builtDate: '25/12/2021',
      impact:
        '>800k requests per week from ~150 paying monthly users',
    },
    {
      title: 'Tailcomp',
      description:
        'The TailwindCSS Composer - a TypeScript library designed to make composing Tailwind CSS classes simpler and more efficient with TypeScript powered AutoComplete.',
      tags: ['TypeScript', 'NPM Package', 'OpenSource'],
      link: 'https://github.com/KeeghanM/tailcomp',
      status: 'Production',
      type: 'Dev Tool',
      builtDate: '17/07/2024',
    },
    {
      title: 'Vergundia',
      description:
        'A classic browser-based horror roguelike game with procedurally generated terrain, a complex biome system, and challenging monster encounters.',
      tags: [
        'Astro',
        'TypeScript',
        'Custom Game Engine',
        'Procedural Generation',
        'OpenSource',
      ],
      link: 'https://vergundia.keeghan.io',
      status: 'In Progress',
      type: 'WebApp',
      builtDate: '01/03/2025',
    },
    {
      title: 'PageMon',
      description:
        'A web application for monitoring Google PageSpeed Insights scores across multiple websites with automated tracking, historical data visualization, and flexible filtering.',
      tags: ['Astro', 'React', 'Automation', 'Drizzle'],
      link: 'https://page-mon.com/',
      status: 'In Progress',
      type: 'WebApp',
      builtDate: '01/01/2025',
    },
    {
      title: 'GMB Manager',
      description:
        'A streamlined solution for automating Google My Business profile management with features for monitoring, bulk management, review response, and smart notifications.',
      tags: ['Astro', 'React', 'Drizzle', 'Automation'],
      link: 'https://gmbmanager.io/',
      status: 'In Progress',
      type: 'WebApp',
      builtDate: '01/02/2025',
    },
    {
      title: 'SpotSpot',
      description:
        'A web application that helps track, organize, and rate favorite places. Like Letterboxd but for places to go and things to do!',
      tags: ['Astro', 'React', 'GoogleMaps', 'Drizzle'],
      link: 'https://spotspot.keeghan.io',
      status: 'Production',
      type: 'WebApp',
      builtDate: '01/04/2025',
      featured: true,
    },
    {
      title: 'Keeghan.io',
      description:
        'My personal portfolio website, built with Astro + React using Shadcn. It showcases my projects, skills, and experience.',
      tags: ['Astro', 'React', 'Shadcn'],
      link: 'https://keeghan.io',
      status: 'Production',
      type: 'WebApp',
      builtDate: '01/02/2025',
    },
    {
      title: 'Merge Alerts',
      description:
        'A simple notifier for when a GitHub or GitLab repository has a new merge into main.',
      tags: ['NextJS', 'Automation', 'OpenSource'],
      link: 'https://merge-alerts.vercel.app',
      status: 'Production',
      type: 'Dev Tool',
      builtDate: '05/06/2024',
    },
    {
      title: 'Human Side of Code',
      description:
        'Human Side of Code (HuSOC) is a platform that bridges the gap between technical expertise and human-centred development in the tech industry. We challenge the stereotype of the "socially awkward developer" and empower tech professionals to excel in both coding and interpersonal skills.',
      tags: ['Astro', 'React', 'Education', 'OpenSource'],
      link: 'https://www.humansideofcode.org/',
      status: 'Production',
      type: 'WebApp',
      builtDate: '15/08/2024',
      featured: true,
    },
  ]

  // Sort projects based on the selected sort option
  const sortProjects = (projects: Project[]) => {
    switch (sortOption) {
      case 'newest':
        return [...projects].sort((a, b) => {
          const dateA = new Date(
            a.builtDate.split('/').reverse().join('/'),
          )
          const dateB = new Date(
            b.builtDate.split('/').reverse().join('/'),
          )
          return dateB.getTime() - dateA.getTime()
        })
      case 'oldest':
        return [...projects].sort((a, b) => {
          const dateA = new Date(
            a.builtDate.split('/').reverse().join('/'),
          )
          const dateB = new Date(
            b.builtDate.split('/').reverse().join('/'),
          )
          return dateA.getTime() - dateB.getTime()
        })
      case 'alphabetical':
        return [...projects].sort((a, b) =>
          a.title.localeCompare(b.title),
        )
      case 'reverseAlphabetical':
        return [...projects].sort((a, b) =>
          b.title.localeCompare(a.title),
        )
      default:
        return projects
    }
  }

  const uniqueStatuses = [
    'All',
    'Production',
    'In Progress',
    'Deprecated',
  ] as ProjectStatus[]
  const uniqueTypes = [
    'All',
    ...new Set(projects.map((p) => p.type)),
  ] as ProjectType[]
  const uniqueTags = [
    ...new Set(projects.flatMap((project) => project.tags)),
  ].sort() as string[]

  // Filter projects based on the selected filters
  const filteredProjects = projects.filter((project) => {
    const matchesStatus =
      statusFilter === 'All' ||
      project.status === statusFilter
    const matchesType =
      typeFilter === 'All' || project.type === typeFilter
    const matchesFeatured =
      !showFeaturedOnly || project.featured
    const matchesTag =
      tagFilter.length === 0 ||
      tagFilter.some((tag) => project.tags.includes(tag))
    return (
      matchesStatus &&
      matchesType &&
      matchesFeatured &&
      matchesTag
    )
  })

  // Sort the filtered projects
  const sortedAndFilteredProjects = sortProjects(
    filteredProjects,
  )

  return (
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="mb-8 space-y-4">
        <div className="mb-2 flex items-center gap-2">
          <Filter
            size={20}
            className="text-primary"
          />
          <h3 className="text-lg font-medium">
            Filter & Sort Projects
          </h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 md:flex md:flex-wrap md:gap-8 md:space-y-0">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Status:
              </label>
              <ToggleGroup
                type="single"
                value={statusFilter}
                onValueChange={(value) =>
                  value &&
                  setStatusFilter(value as ProjectStatus)
                }
                variant="outline"
                className="flex flex-wrap justify-start gap-2"
              >
                {uniqueStatuses.map((status) => (
                  <ToggleGroupItem
                    key={status}
                    value={status}
                    className={`px-3 py-1 text-xs`}
                  >
                    {status}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Type:
              </label>
              <ToggleGroup
                type="single"
                value={typeFilter}
                onValueChange={(value) =>
                  value &&
                  setTypeFilter(value as ProjectType)
                }
                variant="outline"
                className="flex flex-wrap justify-start gap-2"
              >
                {uniqueTypes.map((type) => (
                  <ToggleGroupItem
                    key={type}
                    value={type}
                    className={`px-3 py-1 text-xs`}
                  >
                    {type}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
          <div className="space-y-2 md:flex md:flex-wrap md:gap-8 md:space-y-0">
            <div className="min-w-[180px] space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Tags:
              </label>
              <ToggleGroup
                type="multiple"
                value={tagFilter}
                onValueChange={(value) =>
                  setTagFilter(value)
                }
                variant="outline"
                className="flex flex-wrap justify-start gap-2"
              >
                {uniqueTags.map((tag) => (
                  <ToggleGroupItem
                    key={tag}
                    value={tag}
                    className={`px-3 py-1 text-xs`}
                  >
                    {tag}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <div className="min-w-[180px] space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <Select
                value={sortOption}
                onValueChange={(value) =>
                  setSortOption(value as SortOption)
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Sort projects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">
                    Newest First
                  </SelectItem>
                  <SelectItem value="oldest">
                    Oldest First
                  </SelectItem>
                  <SelectItem value="alphabetical">
                    A-Z
                  </SelectItem>
                  <SelectItem value="reverseAlphabetical">
                    Z-A
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant={
                showFeaturedOnly ? 'default' : 'outline'
              }
              onClick={() =>
                setShowFeaturedOnly(!showFeaturedOnly)
              }
              className={`flex items-center gap-2 border-2 border-transparent`}
            >
              <Star
                size={16}
                className={
                  showFeaturedOnly
                    ? 'fill-white'
                    : 'fill-transparent'
                }
              />
              Featured Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedAndFilteredProjects.map((project, index) => (
          <Card
            key={index}
            className={`card-hover relative flex flex-col overflow-hidden border-0 shadow-md ${project.featured ? 'ring-primary ring-2 ring-offset-2' : ''}`}
          >
            <div className="from-primary to-secondary h-2 bg-gradient-to-r" />
            {project.featured && (
              <div className="p-1">
                <Badge>
                  <Star
                    size={12}
                    className="mr-1 fill-white"
                  />{' '}
                  Featured
                </Badge>
              </div>
            )}
            <CardContent
              className={`flex-grow p-6 ${project.featured ? 'pt-0' : ''}`}
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                {project.status && (
                  <Badge
                    className={` ${project.status === 'In Progress' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : ''} ${project.status === 'Deprecated' ? 'bg-red-100 text-red-700 hover:bg-red-200' : ''} ${project.status === 'Production' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''} `}
                  >
                    {project.status}
                  </Badge>
                )}
              </div>
              <p className="mb-4 text-sm text-gray-600">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-orange-100 text-orange-800 hover:bg-orange-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <p>
                  <strong>Type:</strong> {project.type}
                </p>
                <p>
                  <strong>Built:</strong>{' '}
                  {project.builtDate}
                </p>
                {project.impact && (
                  <p>
                    <strong>Impact:</strong>{' '}
                    {project.impact}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 p-4">
              <a
                href={project.link}
                target="_blank"
                className="text-primary flex items-center gap-1 text-sm font-medium hover:text-orange-500"
              >
                View Project <ArrowRight size={16} />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {sortedAndFilteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500">
            No projects match your current filters. Try
            adjusting your selections.
          </p>
        </div>
      )}
    </div>
  )
}
