import Header from '../components/Header.tsx';
import ArticleElements from '../components/ArticleElements.tsx';
import styles from '../css/homepage.module.scss';


export default function Main() {

    return (
        <>
            <Header />
            <div className={styles.pageLayout}>
                <main className={styles.main}>
                    <div className={styles.feed}>
                        <ul className={styles.feedList}>
                            <li className={styles.yourFeed}>Your Feed</li>
                            <li className={styles.globalFeed}>Global Feed</li>
                        </ul>
                        <hr />
                    </div>
                    <ArticleElements />
                </main>
                
                <aside className={styles.aside}>
                    <span className={styles.popularTagsTitle}>Popular Tags</span>
                    <ul className={styles.popularTagsList}>
                        <li><button>programming</button></li>
                        <li><button>javascript</button></li>
                        <li><button>angularjs</button></li>
                        <li><button>react</button></li>
                        <li><button>mean</button></li>
                        <li><button>node</button></li>
                        <li><button>rails</button></li>
                    </ul>
                </aside>
            </div>
        </>
    );
}