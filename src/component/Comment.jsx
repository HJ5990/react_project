import React from 'react';

const styles = {
    wrapper:{
        margin:8,
        padding:8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 10,
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    text:{
        color: "black",
        fontSize: 16,
    }
}

const Comment = (props) => {
    return (
        <div style={styles.wrapper}>
            <div>
                <img 
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDJfMzQg%2FMDAxNjM1ODM5MTU4NjIx.URJscioIM448LE5p4hFqOqKi5q8HBLZ4_ruLzdMiVUgg.HvzcIBnhMlmhN9swSS_68OXEbvk76q-16D1Qmkqni1gg.JPEG.yomyi00%2F20211102%25A3%25DF164522.jpg&type=sc960_832"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={{
                    ...styles.text,
                    fontWeight:"bold",
                    textAlign: "left"
                    }}>{props.name}</span>
                <span style={styles.text}>{props.comment}</span>
            </div>
        </div>
    );
};

export default Comment;