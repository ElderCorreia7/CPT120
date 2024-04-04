import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
 runApp(
   MaterialApp(
     home: HomePage(),
   ),
 );
}

class HomePage extends StatefulWidget {
 @override
 _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
 List<dynamic> users = [];
 List<dynamic> activities = [];
 List<dynamic> userActivities = [];

 @override
 void initState() {
   super.initState();
   fetchUsers();
   fetchActivities();
   fetchUserActivities();
 }

 Future<void> fetchUsers() async {
   final url = Uri.parse('http://localhost:8080/usuarios');
  
   try {
     final response = await http.get(url);
     final jsonData = json.decode(response.body);


     setState(() {
       users = jsonData['users'];
     });
   } catch (error) {
     print('Erro ao buscar usuários: $error');
   }
 }

 Future<void> fetchActivities() async {
   final url = Uri.parse('http://localhost:8080/atividades');
  
   try {
     final response = await http.get(url);
     final jsonData = json.decode(response.body);


     setState(() {
       activities = jsonData['activities'];
     });
   } catch (error) {
     print('Erro ao buscar atividades: $error');
   }
 }

 Future<void> fetchUserActivities() async {
   final url = Uri.parse('http://localhost:8080/usuarios_atividades');
  
   try {
     final response = await http.get(url);
     final jsonData = json.decode(response.body);


     setState(() {
       userActivities = jsonData['user_activities'];
     });
   } catch (error) {
     print('Erro ao buscar atividades de usuário: $error');
   }
 }

 @override
 Widget build(BuildContext context) {
   return Scaffold(
     //appBar: AppBar(
     // title: Text('Aplicativo Flutter'),
     //),
     body: Column(
       crossAxisAlignment: CrossAxisAlignment.start,
       children: [
         Text('Usuários'),
         Expanded(
           child: ListView.builder(
             itemCount: users.length,
             itemBuilder: (context, index) {
               final user = users[index];
               return ListTile(
                 title: Text(user['nome']),
                 subtitle: Text(user['email']),
               );
             },
           ),
         ),
         SizedBox(height: 20),
         Text('Atividades'),
         Expanded(
           child: ListView.builder(
             itemCount: activities.length,
             itemBuilder: (context, index) {
               final activity = activities[index];
               return ListTile(
                 title: Text(activity['nome']),
                 // Adicione mais campos conforme necessário
               );
             },
           ),
         ),
         SizedBox(height: 20),
         Text('Atividades de Usuário'),
         Expanded(
           child: ListView.builder(
             itemCount: userActivities.length,
             itemBuilder: (context, index) {
               final userActivity = userActivities[index];
               return ListTile(
                 title: Text(userActivity['user_id'].toString()),
                 subtitle: Text(userActivity['activity_id'].toString()),
                 // Adicione mais campos conforme necessário
               );
             },
           ),
         ),
       ],
     ),
   );
 }
}
