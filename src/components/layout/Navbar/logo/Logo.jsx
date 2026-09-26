import { RedirectButton } from '../../../common/buttons/Button'

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <RedirectButton
        redirectTo="#home"
        ariaLabel="Go to home section"
        btnClass="flex flex-col cursor-pointer"
      >
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Abhinish Tiwari
        </h1>
      </RedirectButton>
    </div>
  )
}

export default Logo