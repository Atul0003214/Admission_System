import logging
import logging.config


class LogDetails:
    def __init__(self, function_name, message):
        logging.config.fileConfig('Log/logparam.config')

        # create logger
        logger = logging.getLogger(function_name)
        logger.info(message)
