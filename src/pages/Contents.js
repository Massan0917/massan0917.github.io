import Home from './Contents/Home.js';
import Stacks from './Contents/Stacks.js';
import Medias from './Contents/Medias.js';

function Contents({ navNumber }) {
    if (navNumber === 1) {
        return <Home />;
    } else if (navNumber === 2) {
        return <Stacks />;
    } else if (navNumber === 3) {
        return <Medias />;
    }
}

export default Contents;
