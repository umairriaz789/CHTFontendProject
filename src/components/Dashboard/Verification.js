import React, {useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { url,setHeaders } from "../../slices/api";
import BerbixVerify from '../berbix';

const Verification = () => {
    const params = useParams();
    const [clientID, setclientID] = useState();
    const user = useSelector((state) => state.auth);
    const { datas } = useSelector((state) => state.berbixdata);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${url}/berbix/find/${user._id}`,setHeaders());
                // !clientID && 
                !clientID &&  setclientID(res.data[0].client_token);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProduct();
    }, [params.id, clientID]);

    console.log("items",datas)
    console.log("clientID", clientID)
    console.log("user ID",user._id)

    
    return (
        <Section>
            <BerbixVerify
                clientToken={clientID}
                onComplete={() => {
                    // the user has completed the verification flow
                }}
            />
        </Section>
    )
}

export default Verification

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
