
function Contents({ navNumber }) {
    if (navNumber !== 1) {
        return(
            <main role="main" class="inner cover">
                <h1 class="cover-heading">テストページ</h1>
                <p class="lead">工事中！</p>
            </main>
        )
    }
    return (
        <main role="main" class="inner cover">
            <h1 class="cover-heading">Hello World! I'm Massan!</h1>
            <p class="lead">2000年生まれの大学院生。情報系のひと。</p>
            <p class="lead">学生企業のCIO。web開発をしているよ</p>
        </main>
    );
}

export default Contents;