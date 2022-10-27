import Stories from '../stories'
import Footer from '../footer'
import '../../styles/app-wrapper.scss'

const AppWrapper = () => {
  return (
    <div className="container" data-testid="appwrapper">
      <Stories />
      <Footer />
    </div>
  )
}

export default AppWrapper
