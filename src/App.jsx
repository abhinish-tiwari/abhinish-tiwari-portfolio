import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'
import SinglePageLayout from './components/layout/single-page-layout.component'
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/common/error-boundary/ErrorBoundary';

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <Layout>
            <SinglePageLayout />
          </Layout>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App; 
