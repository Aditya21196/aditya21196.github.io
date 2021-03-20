import view from "../Enums";

/**
 * Checks if obj is a valid non empty string
 */
export const isEmptyString = obj => obj == null || obj === undefined || (typeof obj == 'string' && obj.trim() === '');

/**
 * Checks if obj is a valid non empty list
 */
export const isEmptyList = obj => !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

export const isEmptyObject = obj => obj == null || typeof obj !== 'object' || Object.keys(obj).length === 0;

export const isValidNumber = obj => obj != null && !isNaN(parseFloat(obj)) && !isNaN(Number(obj));

/**
 * @param {Object} obj               The Obj in which the path is to be accessed
 * @param {String} accumulatedPath   The path to the value to be accessed
 * @param {*}      defaultValue      Default to be returned if path doesn't exist
 * @return {*}                       The value at the end of the path or default if the path doesn't exist
 *
 * Example (x, 'key1.key2.key3', y) - Returns x.key1.key2.key3 if avaialble and y if unavailable
 */
export const path = (obj, accumulatedPath, defaultValue) => {
    if (obj == null || typeof obj != 'object' || typeof accumulatedPath != 'string') return defaultValue;

    const path = accumulatedPath.split('.');
    let tempObj = obj;

    for (let accessor of path) {
        if (tempObj == null || typeof tempObj != 'object') return defaultValue;
        else if (accessor in tempObj) tempObj = tempObj[accessor];
        else return defaultValue;
    }
    return tempObj == null ? defaultValue : tempObj;
};

/**
 * @param {Object} common            The Common Styles for all View modes
 * @param {Object} desktop           The Styles specific to Desktop or a view to copy styles from
 * @param {Object} tab               The Styles specific to Tab or a view to copy styles from
 * @param {Object} mobile            The Styles specific to Mobile or a view to copy styles from
 * @return {*}                       An Object with the View Modes as Keys and styles as their values
 */
export const makeStyle = (common, desktop, tab, mobile) => {
    var c = Array.isArray(common) ? merge(common) : common;
    var d = Array.isArray(desktop) ? merge(desktop) : desktop;
    var t = Array.isArray(tab) ? merge(tab) : tab;
    var m = Array.isArray(mobile) ? merge(mobile) : mobile;

    const map = { [view.DESKTOP]: d, [view.TAB]: t, [view.MOBILE]: m };
    return {
        [view.DESKTOP]: merge(c, typeof d === 'object' ? d : typeof map[d] === 'object' ? map[d] : {}),
        [view.TAB]: merge(c, typeof t === 'object' ? t : typeof map[t] === 'object' ? map[t] : {}),
        [view.MOBILE]: merge(c, typeof m === 'object' ? m : typeof map[m] === 'object' ? map[m] : {}),
    }
};

export const removeKeys = (obj, keys) => {
    if (obj == null || isEmptyList(keys)) return obj;
    if (Array.isArray(obj)) {
        return [].concat(obj.map(_ => removeKeys(_, keys)));
    }
    if (typeof obj == 'object') {
        let result = { ...obj };
        keys.forEach(key => delete result[key]);
        return result;
    }
    return obj;
};

/**
 * @params              List of items where each item is either an Object or an Array of Objects2
 * @return {Object}     Resultant object is prepared by merging all the objects and arrays of objects in the params
 */
export const merge = (...args) => isEmptyList(args) ? {} :
    args.reduce((accu, curr) => {
        if (!isEmptyList(curr)) return Object.assign(accu, merge(...curr));
        if (typeof curr === 'object') return Object.assign(accu, curr);
        return accu;
    }, {});

export const deepCheck = (obj1, obj2) => {
    if (obj1 === null && obj2 === null) return true;

    if (typeof obj1 != typeof obj2 || (typeof obj1 != 'object' && typeof obj1 != 'function' && obj1 != obj2))
        return false;

    if (typeof obj1 == 'function') return true;

    if (typeof obj1 != 'object' && obj1 === obj2) return true;

    if (obj1 == null || obj2 == null) return false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;

    let flag = true, keys1 = Object.keys(obj1), keys2 = Object.keys(obj2), length = Object.keys(obj1).length;
    for (let i = 0; i < length; i++) {
        if (keys1[i] !== keys2[i] || !deepCheck(obj1[keys1[i]], obj2[keys2[i]]))
            flag = false;
    }
    return flag;
};

export const mod = (a, b) => ((a % b) + b) % b;

export const createAction = type => payload => ({ type, payload });

export const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

export const safeCall = (f,...args) => {
    if(typeof f == "function")f(...args)
}