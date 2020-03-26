import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchQuotesRequested
} from '../../actions/quote'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [quotes] = useSelector(state => state.quote.documents.quotes);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchQuotesRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            <center><h3><b>Edicion del Poema</b></h3></center>
            <form className="text-center">
                <label for="text">
                    Poema:
                <input id="text" type="text" text="text" placeholder="Entrada del Texto" required />
                </label>
                <br />
                <br />
                <label for="author">
                    Autor del Poema:
                <input id="author" type="text" author="author" placeholder="Entrada del Autor" required />
                </label>
                <br />
                <input type="submit" value="Enviar Modificacion" />
            </form>
        </div>
    )
};
export default Edit;