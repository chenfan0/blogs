import React from 'react'
import Profile from '@/components/Profile'
import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'
import LatestPosts from "@/app/LatestPosts";
import Projects from './Projects'

// export const revalidate = 86400

const Title: React.FC<{ text: string }> = props => {
  const { text } = props

  return <h2 className="flex items-center justify-between mt-16 text-2xl font-bold">{text}</h2>
}

export default async function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className="prose-container">
        <Profile />
        <p className="mt-4 break-words leading-loose">
          你好 👋，欢迎来到我的个人博客。
        </p>
        <p className="mt-4 break-words leading-loose">
          我是一个前端开发人员（2023 ～ 至今），一个普普通通的切图仔，目前工作地点在深圳。
        </p>
        <Title text={t('home-page.posts.title')} />
        <LatestPosts />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 font-medium text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="/posts"
          >
            {'查看所有'}
          </Link>
        </div>
        <Title text={t('home-page.projects.title')} />
        <Projects />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="https://github.com/chenfan0?tab=repositories&sort=stargazers"
            target='_blank'
          >
            {t('home-page.projects.view-all')}
          </Link>
        </div>
      </div>
    </>
  )
}
