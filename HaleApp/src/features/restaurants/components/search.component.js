import React, { useContext,  useState, useEffect } from "react";
import { View } from 'react-native';
import styled from "styled-components/native";
import { Searchbar } from 'react-native-paper';
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled(View)`
    padding: ${props => props.theme.sizes[2]};
    paddingBottom: ${props => props.theme.sizes[1]};
    backgroundColor: "rgba(0,0,0,0)";
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword ] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
    <SearchBarContainer>
        <Searchbar
            icon={ "heart"}
            
            placeholder="Search Food, Shops, Restaurant"
            placeholderTextColor={'#10460a'}
            value={searchKeyword}
            inputStyle={{color: '#10460a', fontSize: 15}}
            onSubmitEditing={() => {
                search(searchKeyword);
            }}
            onChangeText={(text) => {
                setSearchKeyword(text) 
            }}
        /> 
        </SearchBarContainer>
    );
};