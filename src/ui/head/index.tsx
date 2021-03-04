import Head from 'next/head'

interface IPageProps {
  title?: string
  description?: string
}
export const HeadTag: React.FC<IPageProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  )
}
