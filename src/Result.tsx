import { Link } from "react-router-dom";

interface ResultProps {
    word: string | undefined
}

type Word = {
    text: string,
    isOkay: boolean,
    suggestion?: string,
    explanation?: string
}

export default function Result(props: ResultProps) {
    const storedWords: Word[] = [
        { text: 'retarded', isOkay: false, suggestion: 'bonehead', explanation: 'this is ableistic.' },
        { text: 'pussy', isOkay: false, suggestion: 'weakling', explanation: 'this is sexist.' },
        { text: 'bonehead', isOkay: true },
        { text: 'ridiculous', isOkay: true }
    ]
    const checkedWord = storedWords.find((word) => word.text == props.word)

    const renderResult = () => {
        if (checkedWord == undefined) {
            return (<p>Sorry, this word is not yet known to us. 🙄</p>);
        } else if (checkedWord.isOkay) {
            return (<p>Couldn't find anything whrong with that 😊</p>);
        } else {
            return (<p>I'd rather not use that word, because {checkedWord.explanation}
                Maybe you can use {checkedWord.suggestion} instead?</p>);
        }
    }

    return (
        <>
            <h1>Results for {props.word}</h1>
            {renderResult()}
            <Link to="/">Back to the main page</Link>
        </>
    );
}