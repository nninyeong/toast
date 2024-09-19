const EventBus = () => {
    const topics = new Map();

    const subscribe = (topic, listener) => {
        if (!topics.has(topic)) {
            topics.set(topic, []);
        }

        topics.get(topic).push(listener);

        return () => {
            if(topics.has(topic)) {
                const updatedListeners = topics.get(topic).filter(subscribedListener => subscribedListener !== listener);

                if(updatedListeners.length > 0) {
                    topics.set(topic, updatedListeners);
                } else {
                    topics.delete(topic);
                }
            }
        }
    };

    const publish = (topic, data) => {
        if (!topics.has(topic)) return;
        topics.get(topic).forEach((listener) => listener(data));
    };

    return { subscribe, publish };
};

export default EventBus();