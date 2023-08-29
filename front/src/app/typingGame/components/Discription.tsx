import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles((theme) => ({
    root:{
        width:"80%",
        margin:"30px",
    },
    content:{
        fontSize: "16px",
    },
}));

export default function Discription() {
    const classes= useStyles();
    return (
      <>
        <div className={classes.root}>
            <Typography className={classes.content}>
                <b>あなたのタイピング速度はどのくらいでしょうか</b><br />
                CPM(Characters Per Minute) : 1分間あたりに入力できる文字数から判定します。<br />
                単語の間はスペースを入力してください。<br />
                下の文のどこかをクリックした後にスタートできる。
            </Typography>
        </div>
      </>
    )
  }
