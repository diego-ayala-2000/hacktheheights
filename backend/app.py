from flask import Flask, jsonify, request
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return jsonify({'message': 'It works!'})


# Helper function to load data from a JSON file
def load_data(filename):
    with open(filename) as f:
        return json.load(f)

# Helper function to save data to a JSON file
def save_data(filename, data):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

'''
USERS CRUD API
'''

# Users CRUD
@app.route('/users', methods=['GET'])
def get_users():
    data = load_data('data/users.json')
    return jsonify(data["users"])

@app.route('/users', methods=['POST'])
def add_user():
    new_user = request.json
    data = load_data('data/users.json')
    data["users"].append(new_user)
    save_data('data/users.json', data)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    data = load_data('data/users.json')
    user_to_delete = next((user for user in data["users"] if user["id"] == user_id), None)
    if user_to_delete:
        data["users"].remove(user_to_delete)
        save_data('data/users.json', data)
        return jsonify({"message": "User deleted"}), 204
    return jsonify({"error": "User not found"}), 404

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    updated_user = request.json
    data = load_data('data/users.json')
    for index, user in enumerate(data["users"]):
        if user["id"] == user_id:
            data["users"][index] = updated_user
            save_data('data/users.json', data)
            return jsonify(updated_user), 200
    return jsonify({"error": "User not found"}), 404

'''
EVENTS CRUD API
'''

# Events CRUD
@app.route('/events', methods=['GET'])
def get_events():
    data = load_data('data/events.json')
    return jsonify(data["events"])

@app.route('/events', methods=['POST'])
def add_event():
    new_event = request.json
    data = load_data('data/events.json')
    data["events"].append(new_event)
    save_data('data/events.json', data)
    print(new_event)
    return jsonify(new_event), 201

@app.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    data = load_data('data/events.json')
    event_to_delete = next((event for event in data["events"] if event["id"] == event_id), None)
    if event_to_delete:
        data["events"].remove(event_to_delete)
        save_data('data/events.json', data)
        return jsonify({"message": "Event deleted"}), 204
    return jsonify({"error": "Event not found"}), 404

@app.route('/events/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    updated_event = request.json
    data = load_data('data/events.json')
    for index, event in enumerate(data["events"]):
        if event["id"] == event_id:
            data["events"][index] = updated_event
            save_data('data/events.json', data)
            return jsonify(updated_event), 200
    return jsonify({"error": "Event not found"}), 404

'''
TASKS CRUD API
'''

@app.route('/tasks', methods=['GET'])
def get_tasks():
    data = load_data('data/tasks.json')
    return jsonify(data["tasks"])

@app.route('/tasks', methods=['POST'])
def add_task():
    new_task = request.json
    data = load_data('data/tasks.json')
    data["tasks"].append(new_task)
    save_data('data/tasks.json', data)
    return jsonify(new_task), 201

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    data = load_data('data/tasks.json')
    task_to_delete = next((task for task in data["tasks"] if task["id"] == task_id), None)
    if task_to_delete:
        data["tasks"].remove(task_to_delete)
        save_data('data/tasks.json', data)
        return jsonify({"message": "Task deleted"}), 204
    return jsonify({"error": "Task not found"}), 404

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    updated_task = request.json
    data = load_data('data/tasks.json')
    for index, task in enumerate(data["tasks"]):
        if task["id"] == task_id:
            data["tasks"][index] = updated_task
            save_data('data/tasks.json', data)
            return jsonify(updated_task), 200
    return jsonify({"error": "Task not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)