'use strict';

import React from 'react';
import { View } from 'react-native';

const BaseApp = ({ children, ...props }) => {
    return (
        <View style={{flex: 1}} {...props}>
            {children}
        </View>
    );
};

export default BaseApp;