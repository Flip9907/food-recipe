# db.py
from mongoengine import connect, disconnect, get_connection

class MongoDBSession:
    def __init__(self):
        self.database_name = "new_database_name"
        self.host = "localhost"
        self.port =int(27017)


    def __enter__(self):
        self.client = connect(self.database_name, host=self.host, port=self.port)
        self.session = self.client.start_session()
        return self.session

    def __exit__(self, exc_type, exc_value, traceback):
        self.session.end_session()
        disconnect()
