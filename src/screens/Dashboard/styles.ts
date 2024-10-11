import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebede7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 25,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#2F5233',
    fontFamily: 'Times New Roman',
  },
  goalItem: {
    marginBottom: 16,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalText: {
    marginLeft: 8,
    color: '#2F5233',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E1EBE1',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2F5233',
    borderRadius: 2,
  },
  progressText: {
    textAlign: 'right',
    color: '#2F5233',
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2F5233',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  groupSubtitle:{
    color: '#2F5233',
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E1EBE1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -8,
  },
  avatarText: {
    color: '#2F5233',
    fontSize: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  taskText: {
    color: '#2F5233',
    fontSize: 12,
    marginTop: 4,
  },
  meditationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  meditationIcon: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meditationCategory: {
    color: '#2F5233',
    fontSize: 14,
    marginTop: 4,
  },
  meditationDuration: {
    color: '#2F5233',
    fontSize: 12,
    marginTop: 4,
  },
});
