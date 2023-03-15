const en = {
    Welcome: 'Welcome'
};

const es = {
   
};

export const getMessages = function (key, lang) {
    var msgs;
    switch (lang) {
        case 'es':
            msgs = es;
            return msgs[key];

        case 'en':
            msgs = en;
            return msgs[key];

        default:
            msgs = en;
            return msgs[key];
    }
};
