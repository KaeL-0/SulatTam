import styles from '../css/homepage.module.scss';
import data from '../data/articles.ts';
// import type { Article } from '../data/articles.ts';
// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

const daySuffixes = [
    'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
    'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
    'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
    'st'
];

export default function ArticleElements(){

    // const [articles, setArticles] = useState<Article[]>([])

    // useEffect(()=>{
    //     async function fetchData() {
    //         const response = await fetch("https://penna.free.beeceptor.com/api/articles")
    //         const json = await response.json();
    //         setArticles(json.articles)
    //     }
    //     fetchData()
    // }, [])


    const articleElements = data.map((articleItem, index) => {
        const date: Date = new Date(articleItem.postDate);
        const monthName = months[date.getMonth()];
        const day = date.getDate() + daySuffixes[date.getDate() - 1];

        return (
            <section key={index} className={styles.articlePost}>
                <div className={styles.articlepostInfo}>
                    <div className={styles.articlepostInfoContainer}>
                        <div className={styles.imgFrame}>
                            <img src={articleItem.userProfileImageUrl} alt={`${articleItem.username}'s profile`} />
                        </div>
                        <div className={styles.articlepostNameDate}>
                            <span className={styles.articlepostUsername}>{articleItem.username}</span>
                            <span className={styles.articlepostDate}>{`${monthName} ${day}`}</span>
                        </div>  
                    </div>
                    <button className={styles.favorites}>{articleItem.favorites}</button>
                </div>
                <div className={styles.articleContent} onClick={()=> handleClick()}>
                    <h2>{articleItem.title}</h2>
                    <p>{articleItem.about}</p>
                    <span>Read more...</span>
                </div>
                
                {index !== (data.length - 1) && <hr />}
            </section>
        );
    });

    const navigate = useNavigate();

    function handleClick(){

        navigate('/article');
    }

    return (
        <>
            {articleElements}
        </>
        
    )
}