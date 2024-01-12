import { Navbar, Footer, NitsHacks, Techno } from '../../components/index'
const Home = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar />
            <NitsHacks />
            <Techno />
            <Footer />
        </div>
    );
}
export default Home;