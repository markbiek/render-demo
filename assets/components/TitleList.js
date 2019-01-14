import React from 'react';
import PropTypes from 'prop-types';

const TitleList = ({features}) => {
    console.log('TitleList');

    return (
        <>
            <ul className="col list">
                {
                    features.map((feature, idx) => {
                        const { properties: { title } } = feature.toJS();

                        return (
                            <li key={`title_${idx}`}>
                                { title }
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}


TitleList.propTypes = {
    features: PropTypes.array.isRequired,
};

export default TitleList;
