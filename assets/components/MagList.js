import React from 'react';
import PropTypes from 'prop-types';

import MagListItem from './MagListItem';

const MagList = ({features}) => {
    console.log('MagList');

    return (
        <>
            <ul className="col list">
                {
                    features.map((feature, idx) => {
                        const { properties: { mag, type, code } } = feature.toJS();

                        return (
                            <MagListItem key={`mag_${idx}`} code={code} mag={mag} type={type} feature={feature} />
                        );
                    })
                }
            </ul>
        </>
    );
}

MagList.propTypes = {
    features: PropTypes.array.isRequired,
};

export default MagList;
