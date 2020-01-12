import React, { useState, useEffect } from 'react';
import { Card, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TableComponent from '../components/TableComponent'
import PostFrom from '../components/PostForm';
import axios from 'axios';


const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const headerList = ['タスク名', '内容', '編集', '完了'];


function Home() {

    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const [newData, setNewData] = useState({name:'', content:''});

    useEffect(() => {
        getPostsData();
    },[])

    function getPostsData(){
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }




    //入力がされたら（都度）
    function inputChange(e){
        const key = e.target.name;
        const value = e.target.value;
        newData[key] = value;
        let data = Object.assign({}, newData);
        setNewData(data);
     }

     async function createPost(){
        //空だと弾く
        if(newData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/create', {
                name: newData.name,
                content: newData.content
            })
            .then((res) => {
                //戻り値をtodosにセット
                setPost(res.data);
                setNewData('');
            })
            .catch(error => {
                console.log(error);
            });
    }


    async function deletePost(rowData){
        await axios
            .post('/api/delete', {
               id: rowData.id
           })
           .then((res) => {
               this.setState({
                   posts: res.posts
               });
           })
           .catch(error => {
               console.log(error);
           });
   }

    let rows = [];
    posts.map((rowData) =>
        rows.push({
            user_name: rowData.name,
            post: rowData.content,
            btn: <Button color="secondary" variant="contained" key={rowData.id} href={`/post/edit/${rowData.id}`}>編集</Button>,
            deleteBtn: <Button color="primary" variant="contained" href="/" onClick={() => deletePost(rowData)}>完了</Button>
        })
    );


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostFrom data={newData} btnFunc={createPost} inputChange={inputChange} />
                        </Card>
                        <Card className={classes.card}>
                            <TableComponent headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
