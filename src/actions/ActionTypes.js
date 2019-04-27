// An object that know all the ALLOWED ACTION TYPES
// ~ contract or standard

const ActionTypes = {
    
    // Category
    CATEGORIES_ALL_REQ: 'CATEGORIES_ALL_REQ',
    CATEGORIES_ALL_OK:  'CATEGORIES_ALL_OK',
    CATEGORIES_ALL_X:   'CATEGORIES_ALL_X',

    CATEGORY_ADD_REQ:   'CATEGORY_ADD_REQ',
    CATEGORY_ADD_OK:    'CATEGORY_ADD_OK',
    CATEGORY_ADD_X:     'CATEGORY_ADD_X',

    CATEGORY_DELETE_REQ:   'CATEGORY_DELETE_REQ',
    CATEGORY_DELETE_OK:    'CATEGORY_DELETE_OK',
    CATEGORY_DELETE_X:     'CATEGORY_DELETE_X',

    CATEGORY_GETBYID_REQ:   'CATEGORY_GETBYID_REQ',
    CATEGORY_GETBYID_OK:    'CATEGORY_GETBYID_OK',
    CATEGORY_GETBYID_X:     'CATEGORY_GETBYID_X',

    CATEGORY_UPDATE_REQ:   'CATEGORY_UPDATE_REQ',
    CATEGORY_UPDATE_OK:    'CATEGORY_UPDATE_OK',
    CATEGORY_UPDATE_X:     'CATEGORY_UPDATE_X',

    // Members
    MEMBERS_ALL_REQ:    'MEMBERS_ALL_REQ',
    MEMBERS_ALL_OK:     'MEMBERS_ALL_OK',
    MEMBERS_ALL_X:      'MEMBERS_ALL_X',
    
    // Comments
    COMMENTS_BYIDEAID_REQ:  'COMMENTS_BYIDEAID_REQ',
    COMMENTS_BYIDEAID_OK:   'COMMENTS_BYIDEAID_OK',
    COMMENTS_BYIDEAID_X:    'COMMENTS_BYIDEAID_X',

    COMMENTS_BYMEMBERID_REQ:  'COMMENTS_BYMEMBERID_REQ',
    COMMENTS_BYMEMBERID_OK:   'COMMENTS_BYMEMBERID_OK',
    COMMENTS_BYMEMBERID_X:    'COMMENTS_BYMEMBERID_X',

    COMMENT_ADD_REQ:   'COMMENT_ADD_REQ',
    COMMENT_ADD_OK:    'COMMENT_ADD_OK',
    COMMENT_ADD_X:     'COMMENT_ADD_X',

    //CATEGORY_RANDOMIZED_REQ:   'CATEGORY_RANDOMIZED_REQ',
    //CATEGORY_RANDOMIZED_OK:    'CATEGORY_RANDOMIZED_OK',
    //CATEGORY_RANDOMIZED_X:     'CATEGORY_RANDOMIZED_X',

    //CATEGORY_CURRENT_RESET:    'CATEGORY_CURRENT_RESET',
};

export default ActionTypes;
