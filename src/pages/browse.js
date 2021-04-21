import React from 'react';
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {

    const { series } = useContent('series');
    const { films } = useContent('films');
    //we need series and films and we need slides pass it to the browse container

    const slides = selectionFilter({ series, films });
    return <BrowseContainer slides={slides} />;
    
}