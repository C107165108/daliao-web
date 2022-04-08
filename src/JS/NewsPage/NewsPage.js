import React, { useState } from 'react';
import NewsItem from './NewsItem';
import '../../Style/NewsPage/NewsPage.scss';


export default function NewsPage(props) {

    const { news } = props;


    const sortingDate = news.sort((a, b) => a.date > b.date ? -1 : 1);






    return (
        <div className="news-page-content">


            <h3 className="news-list-title">最新消息</h3>
            <div className="news-list-content">

                {sortingDate.map((newitem) => {
                    return (
                        <NewsItem newitem={newitem} key ={newitem.id}/>
                    );
                })}

            </div>

        </div>
    );
}