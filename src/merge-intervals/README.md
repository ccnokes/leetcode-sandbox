# Merge intervals

- Useful with overlapping intervals
- Real life application: detecting conflicts in calendar/scheduling
- Given a list of intervals, each interval can relate to another in 6 ways.
- In a sorted list of intervals, each adjacent interval can relate to each other in 4 ways:
1. a and b don't overlap
2. some part of b overlaps with a
3. a fully overlaps b
4. b fully overlaps a but both have same start
