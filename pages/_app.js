// 모든 페이지에 적용시키는 곳
import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
