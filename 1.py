 
1. A* search:
import heapq
# Define the graph representing the map of Romania
romania_map = {
 'Arad': {'Zerind': 75, 'Sibiu': 140, 'Timisoara': 118},
 'Zerind': {'Arad': 75, 'Oradea': 71},
 'Oradea': {'Zerind': 71, 'Sibiu': 151},
 'Sibiu': {'Arad': 140, 'Oradea': 151, 'Fagaras': 99, 'Rimnicu Vilcea': 80},
 'Timisoara': {'Arad': 118, 'Lugoj': 111},
 'Lugoj': {'Timisoara': 111, 'Mehadia': 70},
 'Mehadia': {'Lugoj': 70, 'Drobeta': 75},
 'Drobeta': {'Mehadia': 75, 'Craiova': 120},
 'Craiova': {'Drobeta': 120, 'Rimnicu Vilcea': 146, 'Pitesti': 138},
 'Rimnicu Vilcea': {'Sibiu': 80, 'Craiova': 146, 'Pitesti': 97},
 'Fagaras': {'Sibiu': 99, 'Bucharest': 211},
 'Pitesti': {'Rimnicu Vilcea': 97, 'Craiova': 138, 'Bucharest': 101},
 'Bucharest': {'Fagaras': 211, 'Pitesti': 101, 'Giurgiu': 90, 'Urziceni': 85},
 'Giurgiu': {'Bucharest': 90},
 'Urziceni': {'Bucharest': 85, 'Hirsova': 98, 'Vaslui': 142},
 'Hirsova': {'Urziceni': 98, 'Eforie': 86},
 'Eforie': {'Hirsova': 86},
 'Vaslui': {'Urziceni': 142, 'Iasi': 92},
 'Iasi': {'Vaslui': 92, 'Neamt': 87},
 'Neamt': {'Iasi': 87}
}
# Define the heuristic function (straight-line distance to Bucharest)
heuristic = {
 'Arad': 366,
 'Zerind': 374,
 'Oradea': 380,
 'Sibiu': 253,
 'Timisoara': 329,
 'Lugoj': 244,
 'Mehadia': 241,
 'Drobeta': 242,
 'Craiova': 160,
 'Rimnicu Vilcea': 193,
 'Fagaras': 178,
 'Pitesti': 98,
 'Bucharest': 0,
 'Giurgiu': 77,
 'Urziceni': 80,
 'Hirsova': 151,
 'Eforie': 161,
 'Vaslui': 199,
 'Iasi': 226,
 'Neamt': 234
}
def astar_search(graph, start, goal, heuristic):
 open_list = [(0, start)]
 closed_list = set()
 parent = {}
 g_score = {city: float('inf') for city in graph}
 g_score[start] = 0
 while open_list:
 current_node = heapq.heappop(open_list)[1]
 if current_node == goal:
 path = []
 while current_node in parent:
 path.append(current_node)
 current_node = parent[current_node]
 path.append(start)
 return path[::-1]
 closed_list.add(current_node)
 for neighbor, cost in graph[current_node].items():
 if neighbor in closed_list:
 continue
 tentative_g_score = g_score[current_node] + cost
 if tentative_g_score < g_score[neighbor]:
 parent[neighbor] = current_node
 g_score[neighbor] = tentative_g_score
 f_score = tentative_g_score + heuristic[neighbor]
 heapq.heappush(open_list, (f_score, neighbor))
 return None
if __name__ == "__main__":
 start_city = 'Mehadia'
 goal_city = 'Craiova'
 shortest_path = astar_search(romania_map, start_city, goal_city, heuristic)
 if shortest_path:
 print(f"Shortest path from {start_city} to {goal_city}: {shortest_path}")
 total_distance = sum(romania_map[shortest_path[i]][shortest_path[i+1]] for i in 
range(len(shortest_path)-1))
 print(f"Total distance: {total_distance} km")
 else:
 print(f"No path found from {start_city} to {goal_city}."
