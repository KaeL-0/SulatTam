import styles from '../css/form-page.module.scss'

export default function NewArticle() {
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Article editor</h1>
            <form className={`${styles.form} ${styles.formModified}`}>

                <label htmlFor="title" className={styles.srOnly}>Article Title</label>
                <input 
                    type='text' 
                    name='title' 
                    id='title' 
                    className={`${styles.input} ${styles.inputArticle}`} 
                    placeholder='Article title' 
                    required 
                />

                <label htmlFor="description" className={styles.srOnly}>Article Description</label>
                <input 
                    type='text' 
                    name='description' 
                    id='description' 
                    className={`${styles.input} ${styles.inputArticle}`} 
                    placeholder="What's this article about?" 
                    required 
                />

                <label htmlFor="body" className={styles.srOnly}>Article Body</label>
                <textarea 
                    name='body' 
                    id='body' 
                    rows={7} 
                    className={`${styles.input} ${styles.textarea}`} 
                    placeholder='Write your article (in markdown)' 
                    required 
                ></textarea>

                <label htmlFor="tags" className={styles.srOnly}>Tags</label>
                <input 
                    type='text' 
                    name='tags' 
                    id='tags' 
                    className={`${styles.input} ${styles.inputArticle}`} 
                    placeholder='Enter tags' 
                    required 
                />

                <button 
                    type='submit' 
                    className={`${styles.button} ${styles.buttonWider}`}
                >
                    Publish Article
                </button>
            </form>
        </main>
    )
}