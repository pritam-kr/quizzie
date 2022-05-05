 import { Footer, Dashboard, Topbar } from "../../component/index"

const Home = () => {
    return (
        <div className="main-bar">
            {/*  Topbar start */}
            <Topbar />
            {/*  Topbar end */}

            <Dashboard />

            <Footer />
        </div>
    )
}

export { Home }