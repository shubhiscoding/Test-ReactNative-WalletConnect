/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../../components/Card';
import { dashboardStyles as styles } from './styles';
import CircularProgress from 'react-native-circular-progress-indicator'; // Ensure correct import

interface GroupMember {
  id: string;
  initials: string;
}

interface MeditationType {
  title: string;
  category: string;
  duration: string;
}

const groupMembers: GroupMember[] = [
  { id: '1', initials: 'JD' },
  { id: '2', initials: 'AS' },
  { id: '3', initials: 'RK' },
  { id: '4', initials: 'ML' },
  { id: '5', initials: 'BP' },
];

const meditations: MeditationType[] = [
  { title: 'Vipassana', category: 'Anxiety & stress', duration: '5 MIN' },
  { title: 'Mindfulness', category: 'Calm & Focus', duration: '10 MIN' }, // Example
];

const DashboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your thyme.</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#2F5233" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Daily Goals */}
        <View style={{ marginTop: 16, marginLeft: 5, marginRight: 5 }}>
          <Card title="Daily goals" >
            {/* Mindful Minutes */}
            <View style={styles.goalItem}>
              {/* Use CircularProgress */}
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
              <CircularProgress
                value={50}
                radius={100}
                inActiveStrokeOpacity={0.5}
                activeStrokeWidth={15}
                inActiveStrokeWidth={20}
                progressValueStyle={{ fontWeight: 'bold', color: 'black' }}
                activeStrokeSecondaryColor="green"
                inActiveStrokeColor="black"
                duration={1500}
                title={'Limit'}
                dashedStrokeConfig={{
                  count: 50,
                  width: 4,
                }}
              />
              </View>
              <Text style={styles.progressText}>3 of 5 mins</Text>
            </View>

            {/* Screen Blocking */}
            <View style={styles.goalItem}>
              <View style={styles.goalHeader}>
                <Icon name="lock" size={20} color="#2F5233" />
                <Text style={styles.goalText}>Screen blocking</Text>
              </View>
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
                {/* Placeholder for CircularProgress for Screen Blocking */}
              </View>
              <Text style={styles.progressText}>0 of 2 hrs</Text>
            </View>
          </Card>
        </View>

        {/* Groups */}
        <Text style={styles.sectionTitle}>Groups</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card title="The Barracks">
            <View style={styles.avatarContainer}>
              {groupMembers.map((member) => (
                <View key={member.id} style={styles.avatar}>
                  <Text style={styles.avatarText}>{member.initials}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.groupSubtitle}>Today's goal</Text>
            <View style={styles.starsContainer}>
              <Icon name="star" size={20} color="#2F5233" />
              <Icon name="star" size={20} color="#2F5233" />
              <Icon name="star-border" size={20} color="#2F5233" />
            </View>
            <Text style={styles.taskText}>1 task left</Text>
          </Card>
        </ScrollView>

        {/* Meditations */}
        <Text style={styles.sectionTitle}>Meditations</Text>
        <View style={styles.meditationsGrid}>
          {meditations.map((meditation, index) => (
            <Card key={index} title={meditation.title}>
              <View style={styles.meditationIcon}>
                <Icon name="spa" size={40} color="#2F5233" />
              </View>
              <Text style={styles.meditationCategory}>{meditation.category}</Text>
              <Text style={styles.meditationDuration}>{meditation.duration}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
