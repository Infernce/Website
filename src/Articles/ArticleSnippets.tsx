import React, { useState } from "react"
import { type ArticleMeta } from "./ArticleModule"
import './ArticleSnippets.css'

export function ArticleHeader( {articleMeta}: {articleMeta: ArticleMeta}) {
    return (
       <div className="articleHeader">
            <div className="articleHeaderTitle">
                <h1>{articleMeta.title}</h1>
            </div>
            <div className="articleHeaderBottom">
                <p className="articleHeaderInfoText">Date Published: {articleMeta.date_published}</p>
            </div>
       </div>
    )
}

type BookProps = {
    children: React.ReactElement<typeof BookPage>[];
}

export function Book ({children}: BookProps) {
    const pages = React.Children.toArray(children);
    const [pageNum, setPageNum] = useState<number>(0);

    function NextPage () {
        if(pages.length - 1 > pageNum)
        {
            setPageNum(pageNum + 1);
        }
    }

    function PrevPage () {
        if(pageNum > 0) {
            setPageNum(pageNum - 1);
        }
    }

    const handleKeyDown = (e: any) => {
        if(e.key === "ArrowLeft") {
            PrevPage();
        }
        if(e.key === "ArrowRight") {
            NextPage();
        }
    }

    return (
        <div className="book"
                tabIndex={0}
                onKeyDown={handleKeyDown}>
            <div className="bookPage">
                {pages[pageNum] ?? null}
            </div>
            <div className="bookUI">
                <button onClick={PrevPage}>
                PREV PAGE
                </button>

                <input
                    type="text"
                    value={pageNum}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value) && (Number(e.target.value) >= 0 && Number(e.target.value) <= pages.length - 1)) {
                            setPageNum(Number(value));
                        }}}>

                </input>

                <button onClick={NextPage}>
                    NEXT PAGE
                </button>
            </div>
            
        </div>
    );
}

export function BookPage ({children}: {children: React.ReactNode})
{
    return (
        <div>
            {children}
        </div>
    )
}